#!/usr/bin/env python3
"""Send a batch of outreach emails over Gmail SMTP from Allaia's Mac.

This is the same route as her August pitches: links arrive exactly as written.
The Claude Gmail connector rewrites links into google.com/url redirects, so
it's used only for reading (replies, bounces), never for sending.

Usage:  python3 scripts/outreach/send_batch.py batch.json [--dry-run]

batch.json is a list of objects:
  {"n": 1, "to": ["a@x.com"], "cc": [], "subject": "...", "text": "...",
   "html": "...", "in_reply_to": "<msgid>" (optional, for follow-ups)}

The app password is read from the macOS Keychain (service "allaia-gmail",
account "allaiapower@gmail.com"). It is never printed or written anywhere.
Prints one JSON line per email: {"n":..,"status":"sent","message_id":"<..>"}.
"""
import json, smtplib, ssl, subprocess, sys, time
from email.message import EmailMessage
from email.utils import make_msgid, formatdate

SENDER = "allaiapower@gmail.com"
NAME = "Allaia"

def app_password():
    return subprocess.check_output(
        ["security", "find-generic-password", "-s", "allaia-gmail", "-a", SENDER, "-w"],
        text=True).strip()

def build(item):
    m = EmailMessage()
    m["From"] = f"{NAME} <{SENDER}>"
    m["To"] = ", ".join(item["to"])
    if item.get("cc"):
        m["Cc"] = ", ".join(item["cc"])
    m["Subject"] = item["subject"]
    m["Date"] = formatdate(localtime=True)
    m["Message-ID"] = make_msgid(domain="gmail.com")
    if item.get("in_reply_to"):
        m["In-Reply-To"] = item["in_reply_to"]
        m["References"] = item.get("references", item["in_reply_to"])
    m.set_content(item["text"])
    if item.get("html"):
        m.add_alternative(item["html"], subtype="html")
    return m

def main():
    path = sys.argv[1]
    dry = "--dry-run" in sys.argv
    batch = json.load(open(path))
    if dry:
        for it in batch:
            print(json.dumps({"n": it["n"], "status": "dry-run", "to": it["to"], "subject": it["subject"]}))
        return
    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ctx) as s:
        s.login(SENDER, app_password())
        for it in batch:
            msg = build(it)
            try:
                s.send_message(msg)
                print(json.dumps({"n": it["n"], "status": "sent", "message_id": msg["Message-ID"]}), flush=True)
            except Exception as e:
                print(json.dumps({"n": it["n"], "status": "error", "error": str(e)[:200]}), flush=True)
            time.sleep(20)  # space emails out inside a run

if __name__ == "__main__":
    main()

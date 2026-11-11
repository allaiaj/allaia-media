# Paid to Exist

Ebook: how to build a personal brand from zero that pays you in five-star stays, PR boxes, song campaigns and real money. About 8,800 words over 58 A5 pages.

- `book.html` is the manuscript. Edit the words here.
- `book.css` is the design. It uses the site palette and type from `docs/STYLE-GUIDE.md`.
- `img/` holds the cover and part-divider portraits, toned and compressed for print.
- `Paid-to-Exist.pdf` is the file to sell.

Rebuild after any edit, from the repo root:

```
npm install
NODE_PATH=$(npm root -g) node ebook/paid-to-exist/build.mjs
```

Every number in the book comes from the brand-collabs page and the outreach docs, which come from Instagram Insights. If a number changes, update it in `book.html` and rebuild.

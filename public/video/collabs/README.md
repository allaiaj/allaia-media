# Featured reel clips

Drop an MP4 here named after the reel code and that card on
/brand-collabs upgrades from the Instagram embed to a self-hosted
video that autoplays muted and loops.

Filename must match the reel code exactly:

  DZTtOngsOBG.mp4   Alloura Villa          227K
  DZTyZlzMrJO.mp4   NU Human Bali          159K
  DZuN-7BMM-v.mp4   The Path Wellness      133K
  DZClhdhs7l7.mp4   Ferro Ubud             116K
  DZheN1usVSX.mp4   NU Human Bali (2)       75K
  DXjGCtWjGYk.mp4   Boardwalk Dubai         56K
  DYCE4YxsDzG.mp4   Jason Derulo            25K
  DZPVsu_sGih.mp4   Ferro Ubud (2)          24K
  DXi-zLRDCJg.mp4   Bubble Hotel Bali       21K
  DZ2Rxivs5dE.mp4   Nude Bali               12K
  DZgpQHusfMy.mp4   Kinoa Bali               9K

Keep them short and small - 6-10 seconds, under ~2MB each, H.264 MP4,
1080x1920. These are silent previews, not the full films; the card
links out to the full reel on Instagram.

To compress:
  ffmpeg -i in.mp4 -t 8 -an -vf scale=720:-2 -crf 30 -movflags +faststart out.mp4

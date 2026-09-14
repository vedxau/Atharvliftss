import io, os, urllib.request
from PIL import Image

OUT = "/app/frontend/public/img"
os.makedirs(OUT, exist_ok=True)

A = "https://customer-assets-eiarnc6j.emergentagent.net/job_atelier-physique/artifacts"
G = "https://static.prod-images.emergentagent.com/jobs/1faca393-e04d-4932-9fa8-38431ec748bd/images"

SRC = {
    "hero": f"{A}/yz1etsrz_IMG_1368.jpg",
    "front-mirror": f"{A}/c2zf04ve_IMG_0662.JPG.webp",
    "back": f"{A}/j0ecf14m_IMG_0346.JPG.webp",
    "wide-flex": f"{A}/8fl8x790_IMG_0892.webp",
    "side-profile": f"{A}/vdg48dqm_IMG_0057.jpg",
    "back-spread": f"{A}/p2asfblu_SaveClip.App_762020122_18094565618629056_7248397367001547931_n.jpg",
    "arm-detail": f"{A}/ai3hz5kx_IMG_1044.JPG.webp",
    "compression-tee": f"{A}/iadqxgpn_IMG_0559.webp",
    "camera-portrait": f"{A}/hmdzagza_IMG_0399.JPG.webp",
    "lifestyle": f"{A}/fmhh2pyx_IMG_0935.JPG.webp",
    "plate": f"{G}/65b0dca415617263f1326dca1621b0250400517f9a284fb4356ef93a2351a89e.jpeg",
    "supplements": f"{G}/afbce6508a38325ce00d98d61bfd8792ac9fc92efeb906297c7a3d2118ebff7c.jpeg",
}

for name, url in SRC.items():
    raw = urllib.request.urlopen(url, timeout=60).read()
    im = Image.open(io.BytesIO(raw)).convert("RGB")
    im.thumbnail((1400, 1400), Image.LANCZOS)
    # full-size webp
    im.save(f"{OUT}/{name}.webp", "WEBP", quality=72, method=6)
    # mobile variant
    m = im.copy()
    m.thumbnail((820, 820), Image.LANCZOS)
    m.save(f"{OUT}/{name}-sm.webp", "WEBP", quality=68, method=6)
    print(name, len(raw) // 1024, "->",
          os.path.getsize(f"{OUT}/{name}.webp") // 1024, "KB /",
          os.path.getsize(f"{OUT}/{name}-sm.webp") // 1024, "KB sm")

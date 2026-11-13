import sys, os
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
n=0; tot=0
for root, _, files in os.walk(src):
    for f in files:
        if not f.endswith(".png"): continue
        rel = os.path.relpath(os.path.join(root, f), src)
        out = os.path.join(dst, rel[:-4] + ".webp")
        os.makedirs(os.path.dirname(out), exist_ok=True)
        im = Image.open(os.path.join(root, f)).convert("RGB")
        if im.width > 2400:
            im = im.resize((2400, round(im.height * 2400 / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=82, method=6)
        n += 1; tot += os.path.getsize(out)
print(n, "files", round(tot/1e6,1), "MB")

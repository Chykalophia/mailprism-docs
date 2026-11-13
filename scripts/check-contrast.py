#!/usr/bin/env python3
"""WCAG contrast check for src/css/tokens.css (light, dark, high contrast) and .mp-pill colors.
Run: python3 scripts/check-contrast.py [-v]. Exits 1 on any failure."""
import re,sys,pathlib
ROOT=pathlib.Path(__file__).resolve().parent.parent
css=(ROOT/'src/css/tokens.css').read_text()+(ROOT/'src/css/custom.css').read_text()
def block(sel):
    m=re.search(re.escape(sel)+r'\s*\{([^}]*)\}',css); return dict(re.findall(r'--(mp-[\w-]+):\s*(#[0-9a-fA-F]{6})',m.group(1)))
L=block(':root'); D={**L,**block("[data-theme='dark']")}
HC={**L,**block("[data-mp-contrast='high']")}; HCD={**D,**block("[data-theme='dark'][data-mp-contrast='high']")}
def lum(h):
    c=[int(h[i:i+2],16)/255 for i in (1,3,5)]
    c=[x/12.92 if x<=0.03928 else ((x+0.055)/1.055)**2.4 for x in c]
    return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]
def cr(a,b):
    a,b=lum(a),lum(b); return (max(a,b)+0.05)/(min(a,b)+0.05)
text=[(f,b,4.5) for f in ['mp-text','mp-text-2','mp-text-3','mp-accent'] for b in ['mp-bg','mp-surface','mp-card','mp-accent-soft','mp-sunk']]
text+=[('mp-accent-on','mp-accent',4.5),('mp-tip','mp-tip-soft',4.5),('mp-done','mp-done-soft',4.5),('mp-warn','mp-warn-soft',4.5),('mp-danger','mp-danger-soft',4.5),('mp-bg','mp-text',4.5),('mp-bg','mp-done',3)]
text+=[(n,'mp-bg',3) for n in ['mp-n1','mp-n2','mp-n3','mp-n4']]+[('mp-border-strong','mp-bg',3),('mp-border-strong','mp-surface',3),('mp-border-strong','mp-card',3)]
bad=0
for name,t in [('light',L),('dark',D),('hc-light',HC),('hc-dark',HCD)]:
    for f,b,need in text:
        r=cr(t[f],t[b]); ok=r>=need
        if not ok: bad+=1
        if not ok or '-v' in sys.argv: print(f'{name:9} {f:18} on {b:16} {r:5.2f} need {need} {"OK" if ok else "FAIL"}')
pills=re.findall(r"(\[data-theme='dark'\] )?\.mp-pill--(\w+) \{ --mp-pill-bg: (#\w+); --mp-pill-c: (#\w+)",css)
for dk,n,bg,c in pills:
    r=cr(c,bg); print(f"pill {'dark' if dk else 'light'} {n}: {r:.2f} {'OK' if r>=4.5 else 'FAIL'}")
    bad+= r<4.5
print('failures:',bad)
sys.exit(1 if bad else 0)

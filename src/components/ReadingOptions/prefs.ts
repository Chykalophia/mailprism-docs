/** Reading options: stored in localStorage, applied as data-mp-* on <html>. */
export type Prefs = {
  size: 's' | 'm' | 'l' | 'xl';
  spacing: 'normal' | 'roomy' | 'airy';
  font: 'inter' | 'lexend' | 'hyperlegible';
  links: 'default' | 'underline';
  extras: 'show' | 'hide';
  motion: 'default' | 'reduce';
  contrast: 'normal' | 'high';
  ruler: 'off' | 'on';
};

export const DEFAULTS: Prefs = {
  size: 'm',
  spacing: 'normal',
  font: 'inter',
  links: 'default',
  extras: 'show',
  motion: 'default',
  contrast: 'normal',
  ruler: 'off',
};

const KEY = 'mp-reading';
/** Attributes the early inline script in docusaurus.config.ts also applies. */
const ATTRS: (keyof Prefs)[] = ['size', 'spacing', 'font', 'links', 'extras', 'motion', 'contrast'];

export function loadPrefs(): Prefs {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Prefs>;
    return {...DEFAULTS, ...raw};
  } catch {
    return {...DEFAULTS};
  }
}

export function savePrefs(p: Prefs): void {
  const changed: Partial<Prefs> = {};
  (Object.keys(p) as (keyof Prefs)[]).forEach((k) => {
    if (p[k] !== DEFAULTS[k]) (changed as Record<string, string>)[k] = p[k];
  });
  try {
    localStorage.setItem(KEY, JSON.stringify(changed));
  } catch {
    // Private mode or blocked storage: the choice still applies to this page.
  }
}

export function applyPrefs(p: Prefs): void {
  const d = document.documentElement;
  ATTRS.forEach((k) => {
    if (p[k] === DEFAULTS[k]) d.removeAttribute(`data-mp-${k}`);
    else d.setAttribute(`data-mp-${k}`, p[k]);
  });
}

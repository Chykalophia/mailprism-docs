import React, {useCallback, useEffect, useId, useRef, useState} from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import Icon from '@site/src/components/Icon';
import {DEFAULTS, type Prefs, applyPrefs, loadPrefs, savePrefs} from './prefs';
import styles from './styles.module.css';

type Option<V extends string> = {value: V; label: string};

function Segmented<K extends keyof Prefs>({
  legend,
  name,
  value,
  options,
  onChange,
}: {
  legend: string;
  name: K;
  value: Prefs[K];
  options: Option<Prefs[K]>[];
  onChange: (k: K, v: Prefs[K]) => void;
}) {
  const id = useId();
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.segmented}>
        {options.map((o) => (
          <label key={o.value} className={clsx(styles.seg, value === o.value && styles.segOn)}>
            <input
              type="radio"
              name={`${id}-${String(name)}`}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(name, o.value)}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Toggle<K extends keyof Prefs>({
  label,
  hint,
  name,
  on,
  values,
  prefs,
  onChange,
}: {
  label: string;
  hint: string;
  name: K;
  on: Prefs[K];
  values: [Prefs[K], Prefs[K]];
  prefs: Prefs;
  onChange: (k: K, v: Prefs[K]) => void;
}) {
  const checked = prefs[name] === on;
  return (
    <label className={styles.toggle}>
      <span className={styles.toggleText}>
        <span className={styles.toggleLabel}>{label}</span>
        <span className={styles.toggleHint}>{hint}</span>
      </span>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange(name, e.target.checked ? values[1] : values[0])}
      />
      <span className={styles.switch} aria-hidden="true" />
    </label>
  );
}

/** A band that follows the pointer, to keep your place while reading. */
function Ruler() {
  const [y, setY] = useState<number | null>(null);
  useEffect(() => {
    const move = (e: PointerEvent) => setY(e.clientY);
    const focus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.getBoundingClientRect) {
        const r = el.getBoundingClientRect();
        setY(r.top + r.height / 2);
      }
    };
    window.addEventListener('pointermove', move, {passive: true});
    window.addEventListener('focusin', focus);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('focusin', focus);
    };
  }, []);
  if (y === null) return null;
  return <div className="mp-ruler" style={{top: y}} aria-hidden="true" />;
}

/**
 * Reading options (navbar). Text size, spacing, font, theme incl. high
 * contrast, a reading ruler, and switches for links, extras and motion.
 * Saved in this browser only.
 */
export default function ReadingOptions({mobile}: {mobile?: boolean}) {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const {colorMode, setColorMode} = useColorMode();
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => setPrefs(loadPrefs()), []);

  const update = useCallback(<K extends keyof Prefs>(k: K, v: Prefs[K]) => {
    setPrefs((p) => {
      const next = {...p, [k]: v};
      applyPrefs(next);
      savePrefs(next);
      return next;
    });
  }, []);

  const reset = () => {
    applyPrefs(DEFAULTS);
    savePrefs(DEFAULTS);
    setPrefs(DEFAULTS);
  };

  useEffect(() => {
    if (!open) return undefined;
    panel.current?.querySelector<HTMLElement>('input:checked')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panel.current?.contains(t) && !btn.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const theme = prefs.contrast === 'high' ? 'high' : colorMode;
  const setTheme = (t: 'light' | 'dark' | 'high') => {
    if (t === 'high') {
      update('contrast', 'high');
    } else {
      update('contrast', 'normal');
      setColorMode(t);
    }
  };

  return (
    <div className={clsx(styles.wrap, mobile && styles.mobile)}>
      <button
        ref={btn}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="type" size={17} />
        <span className={styles.triggerLabel}>Reading options</span>
      </button>
      {open && (
        <div ref={panel} id={panelId} role="dialog" aria-label="Reading options" className={styles.panel}>
          <div className={styles.head}>
            <p className={styles.title}>Reading options</p>
            <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Close reading options">
              <Icon name="x" size={16} />
            </button>
          </div>
          <Segmented
            legend="Text size"
            name="size"
            value={prefs.size}
            onChange={update}
            options={[
              {value: 's', label: 'A−'},
              {value: 'm', label: 'A'},
              {value: 'l', label: 'A+'},
              {value: 'xl', label: 'A++'},
            ]}
          />
          <Segmented
            legend="Spacing"
            name="spacing"
            value={prefs.spacing}
            onChange={update}
            options={[
              {value: 'normal', label: 'Normal'},
              {value: 'roomy', label: 'Roomy'},
              {value: 'airy', label: 'Airy'},
            ]}
          />
          <Segmented
            legend="Font"
            name="font"
            value={prefs.font}
            onChange={update}
            options={[
              {value: 'inter', label: 'Inter'},
              {value: 'lexend', label: 'Lexend'},
              {value: 'hyperlegible', label: 'Hyperlegible'},
            ]}
          />
          <fieldset className={styles.group}>
            <legend className={styles.legend}>Theme</legend>
            <div className={styles.segmented}>
              {(
                [
                  ['light', 'Light'],
                  ['dark', 'Dark'],
                  ['high', 'High contrast'],
                ] as const
              ).map(([v, l]) => (
                <label key={v} className={clsx(styles.seg, theme === v && styles.segOn)}>
                  <input type="radio" name={`${panelId}-theme`} checked={theme === v} onChange={() => setTheme(v)} />
                  <span>{l}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className={styles.toggles}>
            <Toggle label="Reading ruler" hint="A band that follows your pointer" name="ruler" on="on" values={['off', 'on']} prefs={prefs} onChange={update} />
            <Toggle label="Hide tips and extras" hint="Keeps steps and warnings" name="extras" on="hide" values={['show', 'hide']} prefs={prefs} onChange={update} />
            <Toggle label="Underline all links" hint="Not just links in text" name="links" on="underline" values={['default', 'underline']} prefs={prefs} onChange={update} />
            <Toggle label="Reduce motion" hint="Stops movement on this site" name="motion" on="reduce" values={['default', 'reduce']} prefs={prefs} onChange={update} />
          </div>
          <div className={styles.foot}>
            <span>Saved in this browser only.</span>
            <button type="button" className={styles.reset} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      )}
      {prefs.ruler === 'on' && !mobile && <Ruler />}
    </div>
  );
}

import React, {Children, cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import Icon from '@site/src/components/Icon';
import OpenInApp from './OpenInApp';
import {Shot, Stage, type Spot} from './Stage';
import styles from './guide.module.css';

export type View = 'read' | 'steps' | 'walk';

export type StepProps = {
  /** App path for the step's "Open in MailPrism" link, e.g. "/rules/new". */
  app?: string;
  /** Screenshot for the walkthrough (and shown in Read view). */
  shot?: string;
  shotDark?: string;
  shotAlt?: string;
  /** The part of the screenshot to point at, in % of the image. */
  spot?: Spot;
  /** The walkthrough bubble text. Defaults to the step heading. */
  hint?: string;
  children?: React.ReactNode;
  /** Set by <Steps>. */
  index?: number;
};

type Ctx = {
  view: View;
  current: number;
  count: number;
  done: Set<number>;
  go: (i: number, focus?: boolean) => void;
  markDone: (i: number) => void;
};

const StepsContext = createContext<Ctx | null>(null);
const VIEW_KEY = 'mp-guide-view';

function textOf(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement<{children?: React.ReactNode}>(node)) return textOf(node.props.children);
  return '';
}

/** Splits a step's children into its heading (the "## Title" line) and body. */
function splitStep(children: React.ReactNode) {
  const [first, ...rest] = Children.toArray(children);
  if (isValidElement<{id?: string; children?: React.ReactNode}>(first) && first.props.id) {
    return {heading: first, id: first.props.id, title: textOf(first.props.children).replace(/\s*#\s*$/, ''), body: rest};
  }
  return {heading: null, id: undefined, title: '', body: Children.toArray(children)};
}

function CopyLink({id}: {id: string}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.hash = id;
    }
  };
  return (
    <button type="button" className={styles.copyLink} onClick={copy}>
      <Icon name={copied ? 'check' : 'link'} size={14} />
      <span aria-live="polite">{copied ? 'Link copied' : 'Copy link'}</span>
    </button>
  );
}

/** One step. Its first line inside must be a "## Heading". */
export function Step(props: StepProps) {
  const ctx = useContext(StepsContext);
  const {heading, id, body} = splitStep(props.children);
  const i = props.index ?? 0;
  if (!ctx) return <div>{props.children}</div>;
  const {view, current, count, done, go, markDone} = ctx;
  const isCurrent = current === i;
  const isDone = done.has(i);
  const collapsed = view !== 'read' && !isCurrent;

  const actions = (
    <div className={styles.stepActions}>
      {props.app && <OpenInApp to={props.app} />}
      {id && <CopyLink id={id} />}
    </div>
  );

  return (
    <li
      className={clsx(styles.step, styles[`n${(i % 4) + 1}`], isCurrent && view !== 'read' && styles.stepCurrent, isDone && styles.stepDone)}
      data-step={i + 1}
    >
      <div className={styles.stepHead}>
        <span className={styles.numeral} aria-hidden="true">
          {isDone && view !== 'read' ? <Icon name="check" size={18} strokeWidth={2.6} /> : i + 1}
        </span>
        <div className={styles.stepTitle}>
          {heading}
          {view !== 'read' && (
            <span className={styles.stepState}>{isDone ? 'Done' : isCurrent ? `Step ${i + 1} of ${count}` : ''}</span>
          )}
        </div>
        {collapsed && (
          <button type="button" className={styles.showStep} onClick={() => go(i, true)}>
            {isDone ? 'Review' : 'Go to step'}
            <span className={styles.srOnly}> {i + 1}</span>
          </button>
        )}
      </div>
      {!collapsed && (
        <div className={styles.stepBody}>
          {body}
          {props.shot && view !== 'walk' && <Shot src={props.shot} srcDark={props.shotDark} alt={props.shotAlt ?? ''} spot={props.spot} />}
          {actions}
          {view !== 'read' && (
            <div className={styles.stepNav}>
              {i > 0 && (
                <button type="button" className="button button--secondary" onClick={() => go(i - 1, true)}>
                  <Icon name="left" size={16} /> Back
                </button>
              )}
              <button
                type="button"
                className="button button--primary"
                onClick={() => {
                  markDone(i);
                  if (i < count - 1) go(i + 1, true);
                }}
              >
                <Icon name="check" size={16} strokeWidth={2.4} />
                {i < count - 1 ? ' Done, next step' : ' Done'}
              </button>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

/**
 * A guide's steps, with a Read / Step by step / Walkthrough switcher.
 * Read shows everything. Step by step opens one step at a time and keeps your
 * ticks in this browser. Walkthrough shows the real screen with a spotlight.
 * Deep links: ?view=steps or ?view=walk, and #<step-heading-id>.
 */
export default function Steps({children}: {children: React.ReactNode}) {
  const {pathname, search, hash} = useLocation();
  const steps = useMemo(
    () => Children.toArray(children).filter((c): c is React.ReactElement<StepProps> => isValidElement(c)),
    [children],
  );
  const meta = useMemo(() => steps.map((s) => ({...splitStep(s.props.children), ...s.props})), [steps]);
  const canWalk = meta.some((m) => m.shot);

  const [view, setView] = useState<View>('read');
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState<Set<number>>(new Set());
  const doneKey = `mp-done:${pathname}`;

  useEffect(() => {
    const q = new URLSearchParams(search).get('view');
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(VIEW_KEY);
      const raw: unknown = JSON.parse(localStorage.getItem(doneKey) ?? '[]');
      const d = Array.isArray(raw) ? raw.filter((v): v is number => Number.isInteger(v)) : [];
      setDone(new Set(d));
    } catch {
      // storage blocked: start fresh
    }
    const pick = (q ?? saved) as View | null;
    if (pick === 'steps' || (pick === 'walk' && canWalk)) setView(pick);
  }, [search, doneKey, canWalk]);

  useEffect(() => {
    const i = meta.findIndex((m) => m.id && `#${m.id}` === hash);
    if (i >= 0) setCurrent(i);
  }, [hash, meta]);

  const choose = (v: View) => {
    setView(v);
    try {
      localStorage.setItem(VIEW_KEY, v);
    } catch {
      // ignore
    }
  };

  const go = useCallback(
    (i: number, focus?: boolean) => {
      setCurrent(i);
      if (focus) {
        window.requestAnimationFrame(() => {
          const id = meta[i]?.id;
          const el = id ? document.getElementById(id) : null;
          if (el) {
            el.setAttribute('tabindex', '-1');
            el.focus({preventScroll: true});
            el.scrollIntoView({block: 'start', behavior: 'smooth'});
          }
        });
      }
    },
    [meta],
  );

  const markDone = useCallback(
    (i: number) => {
      setDone((prev) => {
        const next = new Set(prev).add(i);
        try {
          localStorage.setItem(doneKey, JSON.stringify([...next]));
        } catch {
          // ignore
        }
        return next;
      });
    },
    [doneKey],
  );

  const resetDone = () => {
    setDone(new Set());
    setCurrent(0);
    try {
      localStorage.removeItem(doneKey);
    } catch {
      // ignore
    }
  };

  const views: [View, string, 'book' | 'listChecks' | 'pointer'][] = [
    ['read', 'Read', 'book'],
    ['steps', 'Step by step', 'listChecks'],
  ];
  if (canWalk) views.push(['walk', 'Walkthrough', 'pointer']);

  const list = (
    <ol className={clsx(styles.steps, styles[`view_${view}`])}>
      {steps.map((s, i) => cloneElement(s, {index: i, key: i}))}
    </ol>
  );

  // The walkthrough shows the current step's screen, or the last one before it.
  let shotIndex = current;
  while (shotIndex > 0 && !meta[shotIndex]?.shot) shotIndex -= 1;
  const shotMeta = meta[shotIndex];

  return (
    <StepsContext.Provider value={{view, current, count: steps.length, done, go, markDone}}>
      <div className={styles.guide}>
        <div className={styles.switcher} role="group" aria-label="How to view this guide">
          {views.map(([v, label, icon]) => (
            <button key={v} type="button" aria-pressed={view === v} className={clsx(styles.switch, view === v && styles.switchOn)} onClick={() => choose(v)}>
              <Icon name={icon} size={15} />
              {label}
            </button>
          ))}
          {view !== 'read' && done.size > 0 && (
            <button type="button" className={styles.resetTicks} onClick={resetDone}>
              Clear ticks
            </button>
          )}
        </div>
        {view === 'steps' && (
          <div className={styles.progress} aria-live="polite">
            <span>
              {done.size} of {steps.length} done
            </span>
            <span className={styles.bar} aria-hidden="true">
              <i style={{width: `${(done.size / steps.length) * 100}%`}} />
            </span>
          </div>
        )}
        {view === 'walk' ? (
          <div className={styles.walk}>
            <div className={styles.walkList}>{list}</div>
            <div className={styles.walkStage}>
              {shotMeta?.shot ? (
                <Stage
                  src={shotMeta.shot}
                  srcDark={shotMeta.shotDark}
                  alt={shotMeta.shotAlt ?? ''}
                  spot={shotIndex === current ? shotMeta.spot : undefined}
                  label={`Step ${current + 1}`}
                  hint={shotIndex === current ? (shotMeta.hint ?? shotMeta.title) : undefined}
                />
              ) : (
                <p className={styles.noShot}>No screen for this step.</p>
              )}
              <div className={styles.dots} aria-hidden="true">
                {steps.map((_, i) => (
                  <i key={i} className={clsx(i === current && styles.dotOn)} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          list
        )}
      </div>
    </StepsContext.Provider>
  );
}

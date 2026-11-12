import React from 'react';
import clsx from 'clsx';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Icon from '@site/src/components/Icon';
import OpenInApp from './OpenInApp';
import styles from './guide.module.css';

/** Front matter key "glance" on a guide. */
export type Glance = {
  time?: string;
  plan?: string;
  /** Where it lives in the app, e.g. ["Settings", "Notifications"]. */
  where?: string[];
  /** App path for the Open in MailPrism button. */
  app?: string;
  appLabel?: string;
};

/** The "At a glance" panel: time, plan, where in the app, and a deep link. */
export default function AtAGlance({mobile}: {mobile?: boolean}) {
  const {frontMatter} = useDoc();
  const g = (frontMatter as {glance?: Glance}).glance;
  if (!g) return null;
  return (
    <aside className={clsx(styles.glance, mobile && styles.glanceMobile)} aria-label="At a glance">
      <p className={styles.glanceTitle}>At a glance</p>
      <dl>
        {g.time && (
          <>
            <dt>
              <Icon name="clock" size={14} /> Time
            </dt>
            <dd>{g.time}</dd>
          </>
        )}
        {g.plan && (
          <>
            <dt>
              <Icon name="star" size={14} /> Plan
            </dt>
            <dd>{g.plan}</dd>
          </>
        )}
        {g.where && g.where.length > 0 && (
          <>
            <dt>
              <Icon name="pin" size={14} /> Where
            </dt>
            <dd className={styles.path}>
              {g.where.map((w, i) => (
                <React.Fragment key={w}>
                  {i > 0 && <Icon name="right" size={12} />}
                  <span>{w}</span>
                </React.Fragment>
              ))}
            </dd>
          </>
        )}
      </dl>
      {g.app && (
        <OpenInApp to={g.app} variant="button">
          {g.appLabel ?? 'Open in MailPrism'}
        </OpenInApp>
      )}
    </aside>
  );
}

import React from 'react';
import Icon, {type IconName} from '@site/src/components/Icon';
import styles from './guide.module.css';

function Card({icon, label, tone, children}: {icon: IconName; label: string; tone: 'accent' | 'plain' | 'done'; children: React.ReactNode}) {
  return (
    <section className={`${styles.card} ${styles[`card_${tone}`]}`} aria-label={label}>
      <p className={styles.cardLabel}>
        <Icon name={icon} size={15} />
        {label}
      </p>
      <div className={styles.cardBody}>{children}</div>
    </section>
  );
}

/** The two or three sentence answer, for readers who only need the gist. */
export function InShort({children}: {children: React.ReactNode}) {
  return (
    <Card icon="bulb" label="In short" tone="accent">
      {children}
    </Card>
  );
}

/** What the reader needs before step 1 (a plan, a connection, a setting). */
export function BeforeYouStart({children}: {children: React.ReactNode}) {
  return (
    <Card icon="listChecks" label="Before you start" tone="plain">
      {children}
    </Card>
  );
}

/** How the reader knows the task worked. Goes after the last step. */
export function DoneWhen({children}: {children: React.ReactNode}) {
  return (
    <Card icon="flag" label="You’re done when" tone="done">
      {children}
    </Card>
  );
}

/** Puts In short and Before you start side by side on wide screens. */
export function Intro({children}: {children: React.ReactNode}) {
  return <div className={styles.intro}>{children}</div>;
}

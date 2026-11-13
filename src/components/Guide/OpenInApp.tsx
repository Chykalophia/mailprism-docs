import React from 'react';
import clsx from 'clsx';
import Icon from '@site/src/components/Icon';
import {appUrl} from './appUrl';
import styles from './guide.module.css';

type Props = {
  /** App path, e.g. "/settings/notifications". */
  to: string;
  /** Visible label. Defaults to "Open in MailPrism". */
  children?: React.ReactNode;
  /** "chip" (inline, small) or "button" (primary). */
  variant?: 'chip' | 'button';
  className?: string;
};

/** A deep link into the MailPrism app. Opens in a new tab. */
export default function OpenInApp({to, children, variant = 'chip', className}: Props) {
  return (
    <a
      href={appUrl(to)}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx('mp-chip', variant === 'button' ? styles.appButton : styles.appChip, className)}
    >
      <span>{children ?? 'Open in MailPrism'}</span>
      <Icon name="external" size={14} />
      <span className={styles.srOnly}> (opens in a new tab)</span>
    </a>
  );
}

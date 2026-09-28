import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Card = {
  title: string;
  body: string;
  href: string;
  accent: string;
  icon: ReactNode;
};

const startHere: Card[] = [
  {
    title: 'Quick Start',
    body: 'Go from sign-up to your first automation in about five minutes.',
    href: '/getting-started/quick-start',
    accent: 'var(--mp-spectrum-violet)',
    icon: (
      <path d="M5 13l4 4L19 7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Rules & Automation',
    body: 'Build "when this, do that" rules with conditions and actions.',
    href: '/rules/overview',
    accent: 'var(--mp-spectrum-blue)',
    icon: (
      <>
        <circle cx="6" cy="6" r="2.4" strokeWidth="2" />
        <circle cx="6" cy="18" r="2.4" strokeWidth="2" />
        <circle cx="18" cy="12" r="2.4" strokeWidth="2" />
        <path d="M8.4 6H14M8.4 18H14M14 6a4 4 0 014 4M14 18a4 4 0 004-4" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'AI Features',
    body: 'Let MailPrism read category, urgency, and sentiment — your call, always.',
    href: '/ai/overview',
    accent: 'var(--mp-spectrum-cyan)',
    icon: (
      <path
        d="M12 3l2.1 4.6L19 9.2l-3.5 3.4.8 4.9L12 15.2 7.7 17.5l.8-4.9L5 9.2l4.9-1.6L12 3z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Response Tracking',
    body: 'See what Needs Action and what you’re Awaiting Reply on — automatically.',
    href: '/tracking/overview',
    accent: 'var(--mp-spectrum-green)',
    icon: (
      <>
        <path d="M4 5h16v11H7l-3 3V5z" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 10.5l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

const features: {label: string; body: string; color: string}[] = [
  {
    label: 'Plain-language rules',
    body: 'Match on sender, subject, body, labels, attachments, time of day, and more — combined with AND / OR / NOT.',
    color: 'var(--mp-spectrum-violet)',
  },
  {
    label: 'AI that understands context',
    body: 'Automatic category, urgency, sentiment, spam, and cold-outreach signals you can use as conditions.',
    color: 'var(--mp-spectrum-blue)',
  },
  {
    label: 'Real actions',
    body: 'Label, archive, star, forward, draft or send replies, unsubscribe, snooze, remind — and chain several together.',
    color: 'var(--mp-spectrum-cyan)',
  },
  {
    label: 'Never drop a thread',
    body: 'Needs Action and Awaiting Reply states keep conversations from slipping through the cracks.',
    color: 'var(--mp-spectrum-green)',
  },
  {
    label: 'Clear analytics',
    body: 'See what your rules did, your success rate, and your AI usage and cost — over 7, 30, or 90 days.',
    color: 'var(--mp-spectrum-yellow)',
  },
  {
    label: 'Yours, privately',
    body: 'Gmail-native via Google OAuth. Turn AI off anytime, bring your own keys on Business, and export or delete anytime.',
    color: 'var(--mp-spectrum-orange)',
  },
];

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>MailPrism Documentation</span>
          <h1 className={styles.title}>
            See your inbox in a <span className="mp-gradient-text">new light</span>.
          </h1>
          <p className={styles.subtitle}>
            MailPrism is AI-powered email automation for Gmail. Tell it what you want —
            “archive newsletters,” “flag urgent client emails” — and it keeps your inbox
            organized around the clock. These docs show you how.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/getting-started/quick-start">
              Get started →
            </Link>
            <Link className="button button--secondary button--lg" to="/rules/overview">
              How rules work
            </Link>
          </div>
          <p className={styles.metaNote}>
            MailPrism is in invite-only beta. New here? Start with the{' '}
            <Link to="/getting-started/quick-start">Quick Start</Link>.
          </p>
        </div>
      </section>

      <div className="mp-spectrum-bar" aria-hidden="true" />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Jump in</h2>
        <div className={styles.cardGrid}>
          {startHere.map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className={styles.card}
              style={{['--accent' as string]: c.accent}}
            >
              <span className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {c.icon}
                </svg>
              </span>
              <span className={styles.cardTitle}>{c.title}</span>
              <span className={styles.cardBody}>{c.body}</span>
              <span className={styles.cardArrow}>Read →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What MailPrism does</h2>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.label} className={styles.feature}>
              <div className={styles.featureHead}>
                <span className={styles.featureDot} style={{background: f.color}} />
                <h3 className={styles.featureLabel}>{f.label}</h3>
              </div>
              <p className={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to refract your inbox?</h2>
        <p className={styles.ctaBody}>
          Connect Gmail, build one rule, and watch it work. You can change or pause anything anytime.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/getting-started/quick-start">
            Open the Quick Start
          </Link>
          <Link className="button button--secondary button--lg" to="/help/faq">
            Read the FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}

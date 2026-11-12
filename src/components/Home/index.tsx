import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Icon, {type IconName} from '@site/src/components/Icon';
import {appUrl} from '@site/src/components/Guide/appUrl';
import styles from './styles.module.css';

type Task = {title: string; to: string; icon: IconName; mins: number};

const POPULAR: Task[] = [
  {title: 'Create your first rule', to: '/getting-started/first-rule', icon: 'zap', mins: 5},
  {title: 'Unsubscribe from newsletters', to: '/inbox/unsubscribe', icon: 'mail', mins: 2},
  {title: 'See who owes you a reply', to: '/inbox/replies', icon: 'reply', mins: 3},
  {title: 'Choose which emails MailPrism sends you', to: '/notifications/overview', icon: 'bell', mins: 3},
  {title: 'Let AI sort your mail', to: '/ai/classification', icon: 'sparkles', mins: 4},
  {title: 'Change your plan', to: '/account/billing', icon: 'star', mins: 2},
];

const START: {title: string; to: string; mins: number}[] = [
  {title: 'Connect Gmail', to: '/getting-started/connecting-gmail', mins: 2},
  {title: 'Create your first rule', to: '/getting-started/first-rule', mins: 5},
  {title: 'Find your way around', to: '/getting-started/dashboard', mins: 3},
];

const TOPICS: {title: string; icon: IconName; to: string; links: [string, string][]}[] = [
  {title: 'Your inbox', icon: 'inbox', to: '/inbox', links: [['Inbox overview', '/inbox/overview'], ['Replies', '/inbox/replies'], ['Keyboard shortcuts', '/inbox/keyboard-shortcuts']]},
  {title: 'Rules', icon: 'zap', to: '/rules', links: [['How rules work', '/rules/overview'], ['Conditions', '/rules/conditions'], ['Actions', '/rules/actions']]},
  {title: 'AI features', icon: 'sparkles', to: '/ai', links: [['What AI does', '/ai/overview'], ['Writing profiles', '/ai/writing-profiles'], ['Privacy and consent', '/ai/privacy-and-consent']]},
  {title: 'Reply tracking', icon: 'reply', to: '/tracking', links: [['How tracking works', '/tracking/overview'], ['Nudges and reminders', '/tracking/nudges-and-reminders'], ['Auto-responders', '/tracking/auto-responders']]},
  {title: 'Emails and alerts', icon: 'bell', to: '/notifications/overview', links: [['What we send', '/notifications/overview'], ['Alerts and digests', '/notifications/alerts-and-digests'], ['Chat and webhooks', '/notifications/chat-and-webhooks']]},
  {title: 'Account and settings', icon: 'sliders', to: '/account', links: [['Find any setting', '/account/settings-map'], ['Sign-in and security', '/account/account-security'], ['Teams', '/account/workspaces-and-teams']]},
];

function openSearch() {
  const input = document.querySelector<HTMLInputElement>('.navbar__search-input');
  if (input) {
    input.focus();
    input.click();
  }
}

export default function Home() {
  const tour = useBaseUrl('/img/screens/inbox/overview.webp');
  const tourDark = useBaseUrl('/img/screens/inbox/overview-dark.webp');
  const [mod, setMod] = useState('Ctrl K');
  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setMod('⌘K');
  }, []);
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>MailPrism Help</p>
          <h1 className={`${styles.title} mp-display`}>
            Less inbox.
            <br />
            More done.
          </h1>
          <p className={styles.lede}>
            Short, visual guides for everything MailPrism does. Pick a task below, or search in your own words.
          </p>
          <button type="button" className={styles.search} onClick={openSearch}>
            <Icon name="search" size={19} />
            <span>Search the guides</span>
            <kbd className={styles.kbd}>{mod}</kbd>
          </button>
        </div>
        <Link to="/inbox/overview" className={styles.tour}>
          <span className={styles.tourShot}>
            <ThemedImage alt="" sources={{light: tour, dark: tourDark}} decoding="async" />
          </span>
          <span className={styles.tourText}>
            <span className={styles.tag}>Start with a tour</span>
            <b>A tour of your inbox</b>
            <span>The parts of the screen, and what to press first.</span>
          </span>
        </Link>
      </section>

      <div className={styles.bento}>
        <section className={`${styles.tile} ${styles.popular}`} aria-labelledby="home-popular">
          <h2 id="home-popular" className={styles.tileTitle}>
            Popular tasks
          </h2>
          <ul className={styles.tasks}>
            {POPULAR.map((t) => (
              <li key={t.to}>
                <Link to={t.to} className={styles.task}>
                  <span className={styles.ic}>
                    <Icon name={t.icon} size={18} />
                  </span>
                  <span className={styles.taskText}>
                    <b>{t.title}</b>
                    <small>
                      <Icon name="clock" size={12} /> {t.mins} min
                    </small>
                  </span>
                  <Icon name="arrow" size={16} className={styles.go} />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.tile} ${styles.start}`} aria-labelledby="home-start">
          <h2 id="home-start" className={styles.tileTitle}>
            New here? Start here
          </h2>
          <ol className={styles.path}>
            {START.map((s, i) => (
              <li key={s.to}>
                <Link to={s.to} className={styles.pathItem}>
                  <span className={styles.pathN}>{i + 1}</span>
                  <span>
                    <b>{s.title}</b>
                    <small>{s.mins} min</small>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className={styles.note}>Guides have a Step by step view that ticks off each step as you go.</p>
        </section>

        {TOPICS.map((t) => (
          <section key={t.title} className={`${styles.tile} ${styles.topic}`} aria-labelledby={`home-${t.icon}`}>
            <Link to={t.to} className={styles.topicHead}>
              <span className={styles.icTile}>
                <Icon name={t.icon} size={20} />
              </span>
              <h2 id={`home-${t.icon}`} className={styles.topicTitle}>
                {t.title}
              </h2>
            </Link>
            <ul className={styles.links}>
              {t.links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className={`${styles.tile} ${styles.wide}`} aria-labelledby="home-reading">
          <span className={styles.icTile}>
            <Icon name="type" size={20} />
          </span>
          <div>
            <h2 id="home-reading" className={styles.topicTitle}>
              Read it your way
            </h2>
            <p className={styles.small}>
              <b>Reading options</b> in the top bar change text size, spacing and font, add a reading ruler, or switch to dark
              or high contrast. Your choices stay in this browser.
            </p>
          </div>
        </section>

        <section className={`${styles.tile} ${styles.wide}`} aria-labelledby="home-help">
          <span className={styles.icTile}>
            <Icon name="lifebuoy" size={20} />
          </span>
          <div>
            <h2 id="home-help" className={styles.topicTitle}>
              Stuck?
            </h2>
            <p className={styles.small}>
              Try <Link to="/help/troubleshooting">Troubleshooting</Link> or the <Link to="/help/faq">FAQ</Link>. Still stuck?{' '}
              <Link to="/help/contact-support">Contact support</Link>.
            </p>
          </div>
        </section>

        <section className={`${styles.tile} ${styles.wide}`} aria-labelledby="home-app">
          <span className={styles.icTile}>
            <Icon name="external" size={20} />
          </span>
          <div>
            <h2 id="home-app" className={styles.topicTitle}>
              Jump straight in
            </h2>
            <p className={styles.small}>
              Guides link to the exact screen in the app. Or <a href={appUrl('/')} target="_blank" rel="noopener">open MailPrism</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

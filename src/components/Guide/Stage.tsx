import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './guide.module.css';

/** A region of a screenshot, in percent of its width and height. */
export type Spot = {x: number; y: number; w: number; h: number};

const box = (s: Spot): React.CSSProperties => ({left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}%`});

/** A screenshot in a step (Read and Step by step views), with a ring on the spot. */
export function Shot({src, srcDark, alt, spot}: {src: string; srcDark?: string; alt: string; spot?: Spot}) {
  const light = useBaseUrl(src);
  const dark = useBaseUrl(srcDark ?? src);
  return (
    <figure className={styles.shot}>
      <a href={light} target="_blank" rel="noopener" aria-label={`Open full-size screenshot: ${alt}`}>
        <ThemedImage alt={alt} sources={{light, dark}} loading="lazy" decoding="async" />
        {spot && <span className={styles.ring} style={box(spot)} aria-hidden="true" />}
      </a>
    </figure>
  );
}

/** The walkthrough stage: the real screen, dimmed except for the spot, with a bubble. */
export function Stage({src, srcDark, alt, spot, label, hint}: {src: string; srcDark?: string; alt: string; spot?: Spot; label: string; hint?: string}) {
  const light = useBaseUrl(src);
  const dark = useBaseUrl(srcDark ?? src);
  const below = spot ? spot.y + spot.h < 62 : true;
  const bubble: React.CSSProperties = spot
    ? {
        left: `${Math.min(Math.max(spot.x, 2), 58)}%`,
        ...(below ? {top: `calc(${spot.y + spot.h}% + 14px)`} : {bottom: `calc(${100 - spot.y}% + 14px)`}),
      }
    : {left: '4%', bottom: '6%'};
  return (
    <figure className={styles.stage}>
      <ThemedImage alt={alt} sources={{light, dark}} decoding="async" />
      {spot && <span className={styles.spot} style={box(spot)} aria-hidden="true" />}
      {hint && (
        <figcaption className={styles.bubble} data-below={below} style={bubble}>
          <b>{label}</b>
          {hint}
        </figcaption>
      )}
    </figure>
  );
}

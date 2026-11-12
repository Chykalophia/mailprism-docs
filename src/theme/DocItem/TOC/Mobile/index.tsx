import React from 'react';
import Mobile from '@theme-original/DocItem/TOC/Mobile';
import AtAGlance from '@site/src/components/Guide/AtAGlance';

/** On narrow screens, "At a glance" sits above the collapsible table of contents. */
export default function MobileWrapper() {
  return (
    <>
      <AtAGlance mobile />
      <Mobile />
    </>
  );
}

import React from 'react';
import Desktop from '@theme-original/DocItem/TOC/Desktop';
import AtAGlance from '@site/src/components/Guide/AtAGlance';

/** Adds the guide's "At a glance" panel above the right-hand table of contents. */
export default function DesktopWrapper() {
  return (
    <div className="mp-toc-rail">
      <AtAGlance />
      <Desktop />
    </div>
  );
}

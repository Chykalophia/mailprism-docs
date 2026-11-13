import React, { useEffect, type ComponentProps } from 'react';
import SearchPage from '@theme-original/SearchPage';

/**
 * The search plugin's page has no <main>, so screen reader users cannot
 * jump to the results (DOC-03, WCAG 1.3.1). Its markup is not swizzlable
 * piecemeal, so this wrapper gives the plugin's content container the main
 * landmark role after it renders. Every other page already has a <main>.
 */
export default function SearchPageWrapper(props: ComponentProps<typeof SearchPage>) {
  useEffect(() => {
    const wrapper = document.getElementById('__docusaurus_skipToContent_fallback');
    if (!wrapper || wrapper.querySelector('main, [role="main"]')) return;
    const container = wrapper.querySelector<HTMLElement>(':scope > .container');
    if (container) container.setAttribute('role', 'main');
  }, []);
  return <SearchPage {...props} />;
}

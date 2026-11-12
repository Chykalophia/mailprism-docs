import React from 'react';
import icons from './icons.json';

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/**
 * Line icons (Lucide-style, 24px grid, drawn with currentColor). Decorative by
 * default: give the surrounding control its own accessible name. The same set
 * feeds the sidebar icons via scripts/build-sidebar-icons.mjs.
 */
export default function Icon({name, size = 18, strokeWidth = 1.8, className}: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{__html: icons[name]}}
    />
  );
}

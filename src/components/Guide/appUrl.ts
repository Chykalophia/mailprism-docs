/** Base address of the MailPrism app. Deep links are this plus an app path. */
export const APP_ORIGIN = 'https://app.mailprism.ai';

export function appUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${APP_ORIGIN}${path.startsWith('/') ? '' : '/'}${path}`;
}

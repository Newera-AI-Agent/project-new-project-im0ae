export const SITE = {
  name: 'Naman Soni',
  title: 'Naman Soni — AI Tools, Web Apps & Browser Experiments',
  tagline: 'Builder of 14 live web apps: AI tools, developer utilities and browser experiments.',
  url: 'https://namansoni-hub.pages.dev',
  // Update this if the deploy is assigned a different host.
  author: 'Naman Soni',
  github: 'https://github.com/NamanSoni78',
  email: '',
  locale: 'en_IN',
  description:
    'An independent index of every product built by Naman Soni — AI image and audio tools, an AI companion app, a browser-based 3D maker, a chess engine, an image editor, a music studio, a TOTP authenticator, a link-in-bio tool, a WebAssembly coding agent and more. Real URLs, real features, no fluff.',
} as const;

export function absoluteUrl(path = '/'): string {
  const base = SITE.url.replace(/\/$/, '');
  if (path === '/') return base + '/';
  return base + (path.startsWith('/') ? path : '/' + path);
}

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Products' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
] as const;

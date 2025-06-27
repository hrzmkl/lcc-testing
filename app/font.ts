import localFont from 'next/font/local';

export const dinPro = localFont({
  src: [
    { path: './fonts/DINPro-Black.woff2', weight: '900', style: 'normal' },
    { path: './fonts/DINPro-Bold.woff2', weight: 'bold', style: 'normal' },
    { path: './fonts/DINPro.woff2', weight: 'normal', style: 'normal' },
    { path: './fonts/DINPro-Italic.woff2', weight: 'normal', style: 'italic' },
    { path: './fonts/DINPro-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/DINPro-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-din-pro',
  display: 'swap',
  fallback: ['sans-serif'],
});

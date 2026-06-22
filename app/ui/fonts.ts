import localFont from 'next/font/local';

export const inter = localFont({
  src: './fonts/InterVariable.woff2',
  weight: '100 900',
  style: 'normal',
});

export const lusitana = localFont({
  src: [
    { path: './fonts/Lusitana-Regular.woff2', weight: '400' },
    { path: './fonts/Lusitana-Bold.woff2', weight: '700' },
  ],
});
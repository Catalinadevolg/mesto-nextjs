import localFont from 'next/font/local';

export const TT_Norms = localFont({
  src: [
    {
      path: './TTNorms-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './TTNorms-Medium.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});

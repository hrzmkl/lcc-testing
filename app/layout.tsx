import type { Metadata } from "next";
import "aos/dist/aos.css";
import "./globals.css";
import { dinPro } from "./font";
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: "Let’s Catch Carbon : Devenez un Karbon Killer avec chaque Tasse de Café en Soutenant l’Agroforesterie pour le Climat et la Biodiversité",
    template: "Let's Catch Carbon : %s",
  },
  description:
    "Soyez un pionnier de l'épopée climatique et changez notre destinée",
  icons: {
    icon: "/Images/icon.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://erp.chacunsoncafe.fr" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </head>
      <body className={`${dinPro.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}

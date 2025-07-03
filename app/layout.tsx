import type { Metadata } from "next";
import "aos/dist/aos.css";
import "./globals.css";
import { dinPro } from "./font";

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
      <body className={`${dinPro.variable}`}>{children}</body>
    </html>
  );
}

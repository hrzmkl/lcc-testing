'use client';

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import Header from "@/components/Header";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootContent>{children}</RootContent>
  );
}

function RootContent({ children }: { children: React.ReactNode }) {
  const bgColor = useAppStore((state) => state.bgColor);

  useEffect(() => {
    import("aos").then((AOS) => AOS.init());
  }, []);

  useEffect(() => {
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = bgColor || '#fff';
    document.body.style.transition = "background 650ms ease-in";
    document.body.style.willChange = 'background';
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, [bgColor]);

  return (
    <div style={{background: bgColor, transition: "background 650ms ease-in", willChange: 'background' }} className="w-full relative">
      <Header />
      {children}
      <Footer />
      <div id="modalOverlay" className="modal-overlay"></div>
    </div>
  );
}

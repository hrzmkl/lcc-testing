import { Metadata } from "next"
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Plan pour le climat d'ici 2032",
    description: "Plan pour le climat d'ici 2032 - Collecter 600 millions d'euros. Reforester 100 000 hectares. Capturer 40 millions de tonnes de CO2 sur 30 ans. Let's catch carbon."
  }

const layout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default layout
import { Metadata } from 'next'
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title:
    'Financez des projets sur le terrain, soutien aux cultivateurs et leurs communautés',
  description:
    'Financez des projets sur le terrain, soutien aux cultivateurs et leurs communautés',
};

const layout = ({ children }: { children: ReactNode }) => {
  return children;
}

export default layout
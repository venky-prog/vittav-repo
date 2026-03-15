'use client';

import '@vittav-repos/utils/global.css';
import { Sidebar } from '../components/sidebar/sidebar';
import { TopBar } from '../components/top-bar/top-bar';
import { LayoutDashboard, PlusIcon } from 'lucide-react';
import {useState} from 'react';

const navItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard />,
  },
  {
    label: 'Create board',
    path: '/create-board',
    icon: <PlusIcon />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className="relative grid h-screen grid-rows-[56px_1fr] md:grid-rows-[64px_1fr]
                md:grid-cols-[240px_1fr]
                md:grid-areas-layout"
      >
        <TopBar onToggleClick={()=>setIsOpen(prev=>!prev)} nav={navItems} />

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} nav={navItems} />

        <main className="overflow-y-auto bg-white">{children}</main>
      </body>
    </html>
  );
}

'use client';

import {
  Button,
} from '@vittav/core-ui';
import { MenuIcon } from 'lucide-react';
import { ReactNode } from 'react';

type TopBarProps = {
  nav: {
    label: string;
    path: string;
    icon: ReactNode;
  }[];
  onToggleClick: () => void;
};

export function TopBar(props: Readonly<TopBarProps>) {
  return (
    <header className="z-100 row-start-1 col-span-full bg-slate-800 text-white flex items-center px-2">
      <div className="flex gap-1 items-center">
        <div className="sm:block md:hidden">
          <Button onClick={props.onToggleClick} variant="ghost">
            <MenuIcon />
          </Button>
        </div>
        <p className="text-xl tracking-tight">Checkmate UI</p>
      </div>
    </header>
  );
}

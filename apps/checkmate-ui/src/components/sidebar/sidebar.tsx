'use client';

import { Item, ItemContent, ItemMedia, ItemTitle } from '@vittav/core-ui';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type SidebarProps = {
  nav: {
    label: string;
    path: string;
    icon: ReactNode;
  }[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function Sidebar(props: Readonly<SidebarProps>) {
  return (
    <>
      <aside className="hidden md:block bg-slate-100 border-r">
        {props.nav.map((item) => (
          <Item key={item.label} variant="outline">
            <ItemMedia>{item.icon}</ItemMedia>
            <ItemContent>
              <ItemTitle>{item.label}</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </aside>
      {props.isOpen && (
        <aside
          onClick={props.setIsOpen.bind(null, false)}
          className="absolute z-50 top-0 left-0 h-screen w-screen bg-black/80 border-r md:hidden"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[240px] bg-slate-100 pt-16 h-full"
          >
            {props.nav.map((item) => (
              <Item key={item.label} variant="outline">
                <ItemMedia>{item.icon}</ItemMedia>
                <ItemContent>
                  <ItemTitle>{item.label}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}

'use client';

import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'
import { Button } from 'libs/core-ui/src';
import { CircleXIcon, GripHorizontalIcon } from 'lucide-react';
import React from 'react';

type DraggableItemProps = {
  children: React.ReactNode;
  id: string;
  onClose?: () => void;
};

export function DraggableItem({ children, id, onClose }: Readonly<DraggableItemProps>) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({id: id, });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex flex-row items-center gap-4 touch-none"
      ref={setNodeRef} style={style} {...attributes}
    >
      <GripHorizontalIcon
        style={{ touchAction: 'none' }}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      />
      {children}
      <Button variant='outline' onClick={onClose}>
        <CircleXIcon />
      </Button>
    </div>
  );
}

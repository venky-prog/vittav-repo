'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import {
  Button,
  Controller,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from '@vittav/core-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { DraggableItem } from '../draggable-item';
import { PlusSquareIcon } from 'lucide-react';

const schema = z.object({
  boardName: z.string().min(1, 'Board name is required'),
  frequency: z.enum(['daily', 'weekly', 'monthly']),
  when: z.string(),
  tasks: z.array(
    z.object({
      label: z.string().nonempty(),
      taskId: z.string(),
      done: z.boolean(),
    }),
  ),
});

export function FormBuilder() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tasks: [
        {
          label: '',
          taskId: crypto.randomUUID(),
          done: false,
        }
      ],
    },
  });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const { fields, swap, insert, remove } = useFieldArray({
    name: 'tasks',
    control: control,
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over?.id);
      swap(oldIndex, newIndex);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(
          (data) => console.log(data),
          (err) => console.log(err),
        )}
      >
        <div className="flex flex-col gap-4">
          <Controller
            label="Board name"
            name="boardName"
            type="text"
            control={control}
          />
          <Controller
            label="Frequency"
            name="frequency"
            type="select"
            control={control}
            options={[
              {
                label: 'Daily',
                value: 'daily',
              },
              {
                label: 'Weekly',
                value: 'weekly',
              },
              {
                label: 'Monthly',
                value: 'monthly',
              },
            ]}
          />
          <Controller
            label="When"
            name="when"
            type="text"
            control={control}
            info="If Weekly please specify week no separated by comma and same for monthly as well."
          />
          <FieldSet>
            <div className="flex flex-row items-center justify-between">
              <FieldLegend>Tasks list</FieldLegend>
              <Button type="button" onClick={() => {
                insert(fields.length, {
                  label: '',
                  taskId: crypto.randomUUID(),
                  done: false,
                });
              }}>
                <PlusSquareIcon />
              </Button>
            </div>

            <FieldGroup className="p-4">
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={fields.map(field => field.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {fields.map((field, index) => (
                    <DraggableItem onClose={() => remove(index)} key={field.id} id={field.id}>
                      <Controller
                        name={`tasks.${index}.label`}
                        label="Task label"
                        type="text"
                        control={control}
                      />
                    </DraggableItem>
                  ))}
                </SortableContext>
              </DndContext>
            </FieldGroup>
          </FieldSet>
        </div>
        <Button type="submit" className="mt-4">
          Done
        </Button>
      </form>
    </div>
  );
}

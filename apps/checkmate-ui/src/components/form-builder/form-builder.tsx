'use client';

import { useForm } from 'react-hook-form';
import { Button, Calendar, Controller } from '@vittav/core-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  boardName: z.string().min(1, 'Board name is required'),
  frequency: z.enum(['daily', 'weekly', 'monthly'], {
    required_error: 'Frequency is required',
  }),
})

export function FormBuilder() {
  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: [],
  });
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex flex-col gap-8">
          
        </div>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
}

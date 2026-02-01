import { Popover, PopoverContent, PopoverTrigger } from '@/core-ui/popover';
import { Button } from '@/core-ui/button';
import { Calendar } from '@/core-ui/calendar';

type DateFieldProps = {
  name: string;
  label: string;
  field: any;
  fieldState: any;
  info?: string;
};

export function DateField(props: Readonly<DateFieldProps>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>{props.label}</Button>
      </PopoverTrigger>
      <PopoverContent className='w-full'>
        <Calendar
          mode="single"
          selected={props.field.value}
          onSelect={props.field.onChange}
        />
      </PopoverContent>
    </Popover>
  );
}

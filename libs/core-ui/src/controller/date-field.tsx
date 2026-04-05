import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Button } from '../button';
import { Calendar } from '../calendar';

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

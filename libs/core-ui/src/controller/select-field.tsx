import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import { Field, FieldDescription, FieldError, FieldLabel } from '../field';

export type SelectFieldProps = {
  name: string;
  label: string;
  options: Array<{ label: string; value: string }>;
  field: ControllerRenderProps<any>;
  fieldState: ControllerFieldState;
  info?: string;
};

export function SelectField(props: Readonly<SelectFieldProps>) {
  return (
    <Field>
      <FieldLabel>
        {props.label}
      </FieldLabel>
      <Select value={props.field.value} onValueChange={props.field.onChange}>
        <SelectTrigger>
          <SelectValue placeholder={props.label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {props.fieldState.error?.message ? (
        <FieldError>{props.fieldState.error.message}</FieldError>
      ) : (
        props.info && <FieldDescription>{props.info}</FieldDescription>
      )}
    </Field>
  );
}

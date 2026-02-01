import { Controller } from 'react-hook-form';
import { Field, Checkbox, FieldContent, FieldLabel } from '@vittav/core-ui';

export type CheckboxFieldMapperProps = {
  label: string;
  id: string;
  control?: any;
};

export function CheckboxFieldMapper({
  label,
  id,
  control,
}: Readonly<CheckboxFieldMapperProps>) {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field, fieldState }) => (
        <Field orientation="horizontal">
          <Checkbox
            id={id}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
          <FieldContent>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
          </FieldContent>
        </Field>
      )}
    ></Controller>
  );
}

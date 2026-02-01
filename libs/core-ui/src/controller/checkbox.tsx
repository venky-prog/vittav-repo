import { Checkbox } from '@/core-ui/checkbox';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/core-ui/field';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

type CheckboxFieldProps = {
  name: string;
  label: string;
  field: ControllerRenderProps<any>;
  fieldState: ControllerFieldState;
  info?: string;
};

export function CheckboxField(props: Readonly<CheckboxFieldProps>) {
  return (
    <Field orientation="horizontal" data-invalid={!!props.fieldState.error}>
      <Checkbox
        id={props.name}
        checked={props.field.value}
        onCheckedChange={props.field.onChange}
        aria-invalid
      />
      <FieldContent>
        <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>

        {props.fieldState.error?.message ? (
          <FieldError>{props.fieldState.error.message}</FieldError>
        ) : (
          props.info && <FieldDescription>{props.info}</FieldDescription>
        )}
      </FieldContent>
    </Field>
  );
}

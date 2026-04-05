import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '../field';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { Input } from '../input';

export type TextFieldProps = {
  name: string;
  label: string;
  field: ControllerRenderProps<any>;
  fieldState: ControllerFieldState;
  info?: string;
};

export function TextField(props: Readonly<TextFieldProps>) {
  return (
    <Field data-invalid={!!props.fieldState.error}>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <Input type="text" id={props.name} {...props.field} />
      {props.fieldState.error?.message ? (
        <FieldError>{props.fieldState.error.message}</FieldError>
      ) : (
        props.info && <FieldDescription>{props.info}</FieldDescription>
      )}
    </Field>
  );
}

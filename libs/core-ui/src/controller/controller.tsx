"use client";
import {
  Controller as HookController,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { TextField } from './text-field';
import { CheckboxField } from './checkbox';
import { DateField } from './date-field';
import { SelectField } from './select-field';

type ControllerExtraProps = {
  info?: string;
};

type ControllerFieldType =
  | {
      type: 'text';
      label: string;
    }
  | {
      type: 'checkbox';
      label: string;
    }
  | {
      type: 'date';
      label: string;
    }
  | {
      type: 'select';
      label: string;
      options: Array<{ label: string; value: string }>;
    };

export function Controller<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: Readonly<Omit<ControllerProps<TFieldValues, TName>, 'render'>> &
    ControllerExtraProps &
    ControllerFieldType,
) {
  return (
    <HookController
      {...props}
      render={({ field, fieldState }) => {
        if (props.type === 'text') {
          return (
            <TextField
              name={props.name}
              label={props.label}
              field={field}
              fieldState={fieldState}
              info={props.info}
            />
          );
        } else if (props.type === 'checkbox') {
          // Return CheckboxField component
          return (
            <CheckboxField
              name={props.name}
              label={props.label}
              field={field}
              fieldState={fieldState}
              info={props.info}
            />
          );
        } else if (props.type === 'date') {
          // Return DateField component
          return (
            <DateField
              name={props.name}
              label={props.label}
              field={field}
              fieldState={fieldState}
              info={props.info}
            />
          );
        } else if (props.type === 'select') {
          return (
            <SelectField
              name={props.name}
              label={props.label}
              field={field}
              fieldState={fieldState}
              info={props.info}
              options={props.options}
            />
          )
        }
        return <div />;
      }}
    />
  );
}

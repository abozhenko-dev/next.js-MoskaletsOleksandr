import {
  ChangeEvent,
  ElementType,
  FC,
  InputHTMLAttributes,
  ReactNode
} from "react";

import { Controller, useFormContext } from "react-hook-form";

import { useTranslation } from "@hooks";

import { ErrorMessagesEnum } from "@utils";

interface InputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  tag?: ElementType;
  error?: boolean;
  helperText?: string;
  labelText?: string;
  InputAdorment?: {
    start?: ReactNode;
    end?: ReactNode;
  };
  InputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const Input: FC<Omit<InputProps, "name">> = (props) => {
  const {
    onChange,
    value,
    InputAdorment,
    InputProps,
    error,
    helperText,
    labelText,
    tag: Tag = "div"
  } = props;
  console.log();

  const getClasses = () => {
    let classes = "input";

    if (error) {
      classes += " error";
    }

    return classes;
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Tag className={getClasses()}>
      <label>
        {labelText && labelText}
        <div className="input-base">
          {InputAdorment?.start && (
            <div className="input-adorment start">{InputAdorment?.start}</div>
          )}
          <input
            {...InputProps}
            type={InputProps?.type || "text"}
            value={value}
            onInput={handleInput}
          />
          {InputAdorment?.end && (
            <div className="input-adorment end">{InputAdorment?.end}</div>
          )}
        </div>
        {helperText && <p className="error">{helperText}</p>}
      </label>
    </Tag>
  );
};

export const ControlledInput: FC<Omit<InputProps, "value" | "onChange">> = (
  props
) => {
  const { name, ...rest } = props;
  const t = useTranslation();

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          value={field.value || ""}
          onChange={field.onChange}
          error={Boolean(fieldState.error)}
          helperText={
            t.enums.error[fieldState.error?.message as ErrorMessagesEnum]
          }
          {...rest}
        />
      )}
    />
  );
};

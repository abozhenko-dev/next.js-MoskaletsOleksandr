import { ElementType, FC } from "react";

import { Controller, useFormContext } from "react-hook-form";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

import { useTranslation } from "@hooks";

import { ErrorMessagesEnum } from "@utils";

import "react-phone-input-2/lib/style.css";

interface PhoneProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  tag?: ElementType;
  error?: boolean;
  helperText?: string;
  labelText?: string;
  PhoneInputProps?: PhoneInputProps;
}

export const Phone: FC<Omit<PhoneProps, "name">> = (props: PhoneProps) => {
  const {
    PhoneInputProps,
    onChange,
    value,
    error,
    helperText,
    labelText,
    tag: Tag = "div"
  } = props;

  // const getClasses = () => {
  //   let classes = "phone";

  //   if (error) {
  //     classes += " error";
  //   }

  //   return classes;
  // };

  return (
    // <Tag className={getClasses()}>
    <Tag className="field">
      <label>
        {labelText && labelText}
        <PhoneInput
          value={value}
          onChange={onChange}
          country="us"
          countryCodeEditable={false}
          onlyCountries={["ua", "us"]}
          specialLabel=""
          inputProps={{ type: "text", inputMode: "numeric" }}
          {...PhoneInputProps}
        />
        {helperText && <p className="error">{helperText}</p>}
      </label>
    </Tag>
  );
};

export const ControlledPhone: FC<Omit<PhoneProps, "value" | "onChange">> = (
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
        <Phone
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

import { ElementType, FC, InputHTMLAttributes, ReactNode } from "react";

import { Controller, useFormContext } from "react-hook-form";

import { useTranslation } from "@hooks";

import { ErrorMessagesEnum } from "@utils";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  wrapperTag?: ElementType;
}

interface RadioGroupProps extends RadioProps {
  name: string;
  labelText: string;
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
}

export const Radio: FC<Omit<RadioProps, "labelText">> = (props) => {
  const { label, wrapperTag: WrapperTag = "div", disabled, ...rest } = props;

  // const getClasses = () => {
  //   let classes = "selector radio";

  //   if (disabled) {
  //     classes += " disabled";
  //   }

  //   return classes;
  // };

  return (
    // <WrapperTag className={getClasses()}>
    <WrapperTag className="field">
      <label className="selector-wrapper">
        <input type="radio" disabled={disabled} {...rest} />
        <span className="selector-label">{label}</span>
      </label>
    </WrapperTag>
  );
};

export const ControlledRadioGroup: FC<Omit<RadioGroupProps, "label">> = (
  props
) => {
  // **Props
  const { name, options, labelText, ...rest } = props;
  const t = useTranslation();

  // **Form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div>
          {labelText && labelText}
          {options.map((option) => (
            <Radio
              key={option.value}
              name={name}
              label={option.label}
              value={option.value}
              checked={option.value === field?.value}
              disabled={option?.disabled}
              onChange={() => field.onChange(option.value)}
              {...rest}
            />
          ))}
          {fieldState.error && (
            <p style={{ color: "var(--clr-error)" }}>
              {t.enums.error[fieldState.error?.message as ErrorMessagesEnum]}
            </p>
          )}
        </div>
      )}
    />
  );
};

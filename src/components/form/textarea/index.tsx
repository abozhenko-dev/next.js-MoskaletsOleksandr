import {
  ChangeEvent,
  ElementType,
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useRef
} from "react";

import { Controller, useFormContext } from "react-hook-form";

import { useTranslation } from "@hooks";

import { ErrorMessagesEnum } from "@utils";

interface TextareaProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  maxHeight?: number;
  minHeight?: number;
  tag?: ElementType;
  error?: boolean;
  helperText?: string;
  labelText?: string;
  InputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const Textarea: FC<Omit<TextareaProps, "name">> = (props) => {
  // **Props
  const {
    value,
    onChange,
    tag: Tag = "div",
    minHeight = 16,
    maxHeight = 40,
    error,
    helperText,
    labelText,
    InputProps
  } = props;

  // **Ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // const getClasses = () => {
  //   let classes = "textarea";

  //   if (error) {
  //     classes += " error";
  //   }

  //   return classes;
  // };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";

    // const { scrollHeight } = textareaRef.current;
    // textareaRef.current.style.height = `${scrollHeight / 10}rem`;
    textareaRef.current.style.height = `${minHeight / 10}rem`;
  }, [value, minHeight]);
  // }, [value]);

  return (
    <Tag
      className="field"
      // className={getClasses()}
      style={{
        "--min-height": `${minHeight}rem`,
        "--max-height": `${maxHeight}rem`
      }}
    >
      {labelText && labelText}
      <div className="textarea-base">
        <textarea
          ref={textareaRef}
          {...InputProps}
          value={value}
          onInput={handleInput}
        />
      </div>
      {helperText && <p className="error">{helperText}</p>}
    </Tag>
  );
};

export const ControlledTextarea: FC<
  Omit<TextareaProps, "value" | "onChange">
> = (props) => {
  const { name, ...rest } = props;
  const t = useTranslation();

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Textarea
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

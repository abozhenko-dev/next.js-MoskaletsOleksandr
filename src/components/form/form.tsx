import { FormHTMLAttributes, ReactNode } from "react";

import { FormProvider, UseFormReturn } from "react-hook-form";

import { ControlledInput } from "./input";
import { ControlledPhone } from "./phone";
import { ControlledRadioGroup } from "./radio";
import { ControlledTextarea } from "./textarea";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

const Form = (props: FormProps) => {
  const { children, methods, onSubmit, className } = props;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className={className ? `${className} form` : "form"}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = ControlledInput;
Form.Phone = ControlledPhone;
Form.RadioGroup = ControlledRadioGroup;
Form.Textarea = ControlledTextarea;

export { Form };

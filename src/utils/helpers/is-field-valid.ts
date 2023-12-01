import { FieldValues } from "react-hook-form";

export const isFieldValid = (
  fieldName: string,
  formState: FieldValues["formState"]
): boolean => {
  const { dirtyFields, errors } = formState;
  return dirtyFields[fieldName] && !errors?.[fieldName];
};

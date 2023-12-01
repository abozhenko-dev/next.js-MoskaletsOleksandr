export type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};

export enum Locales {
  En = "en",
  Uk = "uk"
}

export interface ITranslation {
  title: Record<string, string>;
  subtitle: Record<string, string>;
  common: Record<string, string>;
  action: Record<string, string>;
  form: {
    label: Record<string, string>;
    placeholder: Record<string, string>;
  };
  enums: {
    navigation: Record<string, string>;
    doneStatus: Record<string, string>;
    gender: Record<string, string>;
    sex: Record<string, string>;
    error: Record<string, string>;
  };
}

import { DeepPartial, ITranslation, Locales } from "@utils";

import * as components from "./components";

const createTranslation = (locale: Locales): DeepPartial<ITranslation> =>
  Object.entries(components)?.reduce((acc: any, [key, value]) => {
    acc[key] = value[locale];
    return acc;
  }, {} as DeepPartial<ITranslation>);

export const translations = {
  en: createTranslation(Locales.En),
  uk: createTranslation(Locales.Uk)
};

export type TranslationKeys = keyof typeof translations;

import { useRouter } from "next/router";

import { translations } from "@utils";
import { Locales } from "@utils";

export const useTranslation = () => {
  // **Props
  const { locale, defaultLocale } = useRouter();

  return locale && Object.prototype.hasOwnProperty.call(translations, locale)
    ? translations[locale as Locales]
    : translations[defaultLocale as Locales];
};

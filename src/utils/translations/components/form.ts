import { ITranslation, Locales } from "@utils";

export const form: Record<Locales, ITranslation["form"]> = {
  en: {
    label: {
      name: "Name",
      phoneNumbersList: "List of phone numbers",
      email: "Email",
      dot: "Date of birth",
      gender: "Gender"
    },
    placeholder: {
      phoneNumber: "+380111111111"
    }
  },
  uk: {
    label: {
      name: "Ім'я",
      phoneNumbersList: "Список номерів телефонів",
      email: "Пошта",
      dot: "Дата народження",
      gender: "Стать"
    },
    placeholder: {
      phoneNumber: "+380111111111"
    }
  }
};

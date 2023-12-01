import { ITranslation, Locales } from "@utils";

export const form: Record<Locales, ITranslation["form"]> = {
  en: {
    label: {
      name: "Name",
      phoneNumbersList: "List of phone numbers",
      phoneNumber: "Phone number",
      email: "Email",
      message: "Message",
      dot: "Date of birth",
      city: "City",
      state: "State",
      country: "Country",
      gender: "Gender"
    },
    placeholder: {
      phoneNumber: "+380111111111",
      firstName: "First name",
      lastName: "Last name",
      email: "example@mail.com",
      city: "Kyiv",
      state: "Kyiv region",
      country: "Ukraine",
      message: "I'd like ..."
    }
  },
  uk: {
    label: {
      name: "Ім'я",
      phoneNumbersList: "Список номерів телефонів",
      phoneNumber: "Номер телефону",
      email: "Пошта",
      message: "Повідомлення",
      dot: "Дата народження",
      city: "Місто",
      state: "Штат / область",
      country: "Країна",
      gender: "Стать"
    },
    placeholder: {
      phoneNumber: "+380111111111",
      firstName: "Ім'я",
      lastName: "Прізвище",
      email: "example@mail.com",
      city: "Київ",
      state: "Київська область",
      country: "Україна",
      message: "Я хотів би ..."
    }
  }
};

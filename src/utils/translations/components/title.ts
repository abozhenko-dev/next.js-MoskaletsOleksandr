import { ITranslation, Locales } from "@utils";

export const title: Record<Locales, ITranslation["title"]> = {
  en: {
    homePage: "Home Page",
    contacts: "Contacts",
    todosList: "Todos List",
    contactList: "Contact List"
  },
  uk: {
    homePage: "Домашня Сторінка",
    contacts: "Контакти",
    todosList: "Список Завдань",
    contactList: "Список Контактів"
  }
};

export const subtitle: Record<Locales, ITranslation["subtitle"]> = {
  en: {},
  uk: {}
};

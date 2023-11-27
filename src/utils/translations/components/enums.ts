import { ITranslation, Locales } from "@utils";

export const enums: Record<Locales, ITranslation["enums"]> = {
  en: {
    navigation: {
      home: "Home",
      contacts: "Contacts",
      todo: "ToDo"
    },
    doneStatus: {
      yes: "Yes",
      no: "No"
    },
    gender: {
      male: "Male",
      female: "Female"
    },
    sex: {
      male: "he",
      female: "she"
    },
    error: {
      inpetError: "Error!",
      nameIsRequired: "Name is rerequired",
      phoneIsRequired: "Phone Number is rerequired",
      emailIsRequired: "Email is rerequired",
      dobIsRequired: "Date of birth is rerequired",
      genderIsRequired: "Gender of birth is rerequired",
      namePattern: "Enter only letters",
      phonePattern: "Enter only numbers, spaces or dashes",
      emailPattern: "Enter a valid email address",
      maxLength: "Enter no more than 39 letters"
    }
  },
  uk: {
    navigation: {
      home: "Домашня",
      contacts: "Контакти",
      todo: "Завдання"
    },
    doneStatus: {
      yes: "Так",
      no: "Ні"
    },
    gender: {
      male: "Чоловік",
      female: "Жінка"
    },
    sex: {
      male: "він",
      female: "вона"
    },
    error: {
      inpetError: "Помилка!",
      nameIsRequired: "Ім'я обов'язкове",
      phoneIsRequired: "Номер телефону обов'язковий",
      emailIsRequired: "Пошта обов'язкова",
      dobIsRequired: "Дата обов'язкова",
      genderIsRequired: "Стать обов'язкова",
      namePattern: "Введіть тільки літери",
      phonePattern: "Введіть тільки цифри, пробіли та тире",
      emailPattern: "Це не схоже на адресу поштової скриньки",
      maxLength: "Введіть не більше 39 символів"
    }
  }
};

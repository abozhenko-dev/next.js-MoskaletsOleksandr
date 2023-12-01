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
      inputError: "Error!",
      nameIsRequired: "Name is rerequired",
      phoneIsRequired: "Phone Number is rerequired",
      emailIsRequired: "Email is rerequired",
      messageIsRequired: "Message is rerequired",
      dobIsRequired: "Date of birth is rerequired",
      genderIsRequired: "Gender is rerequired",
      firstNameIsRequired: "First name is rerequired",
      lastNameIsRequired: "Last name is rerequired",
      cityIsRequired: "City is rerequired",
      stateIsRequired: "State is rerequired",
      countryIsRequired: "Country is rerequired",
      namePattern: "Enter only letters",
      phonePattern: "Enter only numbers, spaces or dashes",
      emailPattern: "Enter a valid email address",
      emailIsInvalid: "Enter a valid email address",
      maxLength: "Enter no more than 39 letters",
      maxLengthMessage: "Enter no more than 199 letters",
      phoneIsTooShort: "Enter at least 7 digits"
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
      inputError: "Помилка!",
      nameIsRequired: "Ім'я обов'язкове",
      phoneIsRequired: "Номер телефону обов'язковий",
      emailIsRequired: "Пошта обов'язкова",
      messageIsRequired: "Повідомлення обов'язкове",
      dobIsRequired: "Дата обов'язкова",
      genderIsRequired: "Стать обов'язкова",
      firstNameIsRequired: "Ім'я обов'язкове",
      lastNameIsRequired: "Прізвище обов'язкове",
      cityIsRequired: "Місто обов'язкове",
      stateIsRequired: "Штат/область обов'язкова",
      countryIsRequired: "Країна обов'язкова",
      namePattern: "Введіть тільки літери",
      phonePattern: "Введіть тільки цифри, пробіли та тире",
      emailPattern: "Це не схоже на адресу поштової скриньки",
      emailIsInvalid: "Це не схоже на адресу поштової скриньки",
      maxLength: "Введіть не більше 39 символів",
      maxLengthMessage: "Введіть не більше 199 символів",
      phoneIsTooShort: "Введіть щонайменше 7 цифр"
    }
  }
};

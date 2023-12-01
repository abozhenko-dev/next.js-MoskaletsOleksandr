import { ITranslation, Locales } from "@utils";

export const common: Record<Locales, ITranslation["common"]> = {
  en: {
    id: "ID",
    done: "Done",
    dob: "Date of birth",
    message: "Message",
    phones: "Phones",
    phone: "Phone",
    footerText: "Some footer",
    testFormText:
      "Check everything one more time, if you need to change something, click the 'Back' button."
  },
  uk: {
    id: "Ідентифікатор",
    done: "Завершено",
    dob: "Дата народження",
    message: "Повідомлення",
    phones: "Телефони",
    phone: "Телефон",
    footerText: "Певний футер (тут могла бути ваша реклама)",
    testFormText:
      "Перевірте все ще раз, якщо потрібно щось змінити, натисніть кнопку 'Назад'."
  }
};

import { ITranslation, Locales } from "@utils";

export const common: Record<Locales, ITranslation["common"]> = {
  en: {
    id: "ID",
    done: "Done",
    dob: "Date of birth",
    message: "Message",
    phones: "Phones",
    phone: "Phone",
    footerText: "Some footer"
  },
  uk: {
    id: "Ідентифікатор",
    done: "Завершено",
    dob: "Дата народження",
    message: "Повідомлення",
    phones: "Телефони",
    phone: "Телефон",
    footerText: "Певний футер (тут могла бути ваша реклама)"
  }
};

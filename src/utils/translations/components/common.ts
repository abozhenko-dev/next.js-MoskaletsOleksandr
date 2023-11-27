import { ITranslation, Locales } from "@utils";

export const common: Record<Locales, ITranslation["common"]> = {
  en: {
    id: "ID",
    done: "Done",
    dob: "Date of birth",
    phones: "Phones",
    footerText: "Some footer"
  },
  uk: {
    id: "Ідентифікатор",
    done: "Завершено",
    dob: "Дата народження",
    phones: "Телефони",
    footerText: "Певний футер (тут могла бути ваша реклама)"
  }
};

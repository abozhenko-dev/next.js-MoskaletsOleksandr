import { ITranslation, Locales } from "@utils";

export const action: Record<Locales, ITranslation["action"]> = {
  en: {
    addOneMoreNumber: "Add one more number",
    addToContacts: "Add to contacts",
    backToTodos: "Back to Todos",
    remove: "Remove",
    back: "Back",
    next: "Next",
    submit: "Submit"
  },
  uk: {
    addOneMoreNumber: "Додати ще один номер",
    addToContacts: "Додати до контактів",
    backToTodos: "Назад до Завдань",
    remove: "Видалити",
    back: "Назад",
    next: "Далі",
    submit: "Підтвердити"
  }
};

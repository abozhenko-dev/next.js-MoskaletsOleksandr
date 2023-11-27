import { useState } from "react";

import { nanoid } from "nanoid";
import { useFieldArray, useForm } from "react-hook-form";
import { fakeContacts } from "src/data/fakeData";

import { ContactCard, Title } from "@components";

import { useTranslation } from "@hooks";

import { Gender, IContact } from "@utils";

interface FormData {
  name: string;
  email: string;
  gender: Gender;
  phoneNumbers: { number: string }[];
  dob: Date;
}

export const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>(fakeContacts);
  const t = useTranslation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      gender: null,
      phoneNumbers: [{ number: "" }],
      dob: new Date()
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: "phoneNumbers",
    control
  });

  const watchPhoneNumbers = watch("phoneNumbers");

  const onSubmit = (data: FormData): void => {
    const contactWithId = { ...data, id: nanoid() };
    setContacts([...contacts, contactWithId]);
    reset();
  };

  return (
    <section className="contacts">
      <Title title={t.title.contacts} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="field">
            <label htmlFor="name">{t.form.label.name}:</label>
            <input
              id="name"
              className="input"
              {...register("name", {
                required: t.enums.error.nameIsRequired,
                maxLength: {
                  value: 39,
                  message: t.enums.error.maxLength
                },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/,
                  message: t.enums.error.namePattern
                }
              })}
            />
            {errors?.name && (
              <p className="error">
                {errors?.name?.message || t.enums.error.inputError}
              </p>
            )}
          </div>
          <div className="phones">
            <label>{t.form.label.phoneNumbersList}:</label>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    {...register(`phoneNumbers.${index}.number` as const, {
                      required: t.enums.error.phoneIsRequired,
                      pattern: {
                        value: /^[0-9]*[-\s]?[0-9]*$/,
                        message: t.enums.error.phonePattern
                      },
                      maxLength: {
                        value: 39,
                        message: t.enums.error.maxLength
                      }
                    })}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      {t.action.remove}
                    </button>
                  )}
                  {errors?.phoneNumbers?.[index] && (
                    <p className="error">
                      {errors?.phoneNumbers?.[index]?.number?.message ||
                        t.enums.error.inputError}
                    </p>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => append({ number: "" })}
              disabled={
                watchPhoneNumbers[watchPhoneNumbers.length - 1].number === ""
              }
            >
              {t.action.addOneMoreNumber}
            </button>
          </div>
          <div className="field">
            <label htmlFor="email">{t.form.label.email}:</label>
            <input
              id="email"
              className="input"
              {...register("email", {
                required: t.enums.error.emailIsRequired,
                maxLength: {
                  value: 39,
                  message: t.enums.error.maxLength
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t.enums.error.emailPattern
                }
              })}
            />
            {errors?.email && (
              <p className="error">
                {errors?.email?.message || t.enums.error.inputError}
              </p>
            )}
          </div>
          <div className="field field--dob">
            <label htmlFor="dob">{t.form.label.dot}:</label>
            <input
              type="date"
              id="dob"
              className="input"
              {...register("dob", {
                valueAsDate: true,
                required: t.enums.error.dobIsRequired
              })}
            />
            {errors?.dob && (
              <p className="error">
                {errors?.dob?.message || t.enums.error.inputError}
              </p>
            )}
          </div>
          <div className="field">
            <label>{t.form.label.gender}:</label>
            <label>
              <input
                type="radio"
                value={Gender.Male}
                {...register("gender", {
                  required: t.enums.error.genderIsRequired
                })}
              />
              {t.enums.gender.male}
            </label>
            <label>
              <input
                type="radio"
                value={Gender.Female}
                {...register("gender", {
                  required: t.enums.error.genderIsRequired
                })}
              />
              {t.enums.gender.female}
            </label>
            {errors?.gender && (
              <p className="error">
                {errors?.gender?.message || t.enums.error.inputError}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="button"
            value={t.action.addToContacts}
            disabled={!isValid || isSubmitting}
          />
        </form>
        <div className="contact-list">
          <h2>Contact List</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <ContactCard contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

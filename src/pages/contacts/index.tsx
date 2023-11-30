import { useState } from "react";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { fakeContacts } from "src/data/fakeData";

import { ContactCard, Form, TestModal, Title } from "@components";

import { useTranslation } from "@hooks";

import { Gender, IContact } from "@utils";
import { ContactAddBody } from "@utils/declarations/contact/contact.schema";

interface IFormData {
  name: string;
  email: string;
  gender: Gender;
  phoneNumber: string;
  message: string;
}

export const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>(fakeContacts);
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);
  const t = useTranslation();
  const methods = useForm({ resolver: classValidatorResolver(ContactAddBody) });

  const genderRadioOptions: {
    label: string;
    value: Gender;
  }[] = [
    { label: t.enums.gender.male, value: Gender.Male },
    { label: t.enums.gender.female, value: Gender.Female }
  ];

  const onSubmit = (data: IFormData): void => {
    const contactWithId = { ...data, id: nanoid() };
    setContacts([...contacts, contactWithId]);
    methods.reset();
  };

  const toogleTestModal = () => {
    setIsTestModalOpen((prev) => !prev);
  };

  return (
    <section className="contacts">
      <Title title={t.title.contacts} />
      <button
        onClick={() => {
          toogleTestModal();
        }}
      >
        Open test modal
      </button>
      <div>
        <Form
          methods={methods}
          onSubmit={methods.handleSubmit(onSubmit)}
          className="contact-form"
        >
          <Form.Input name="name" labelText={t.form.label.name} />
          <Form.Input name="email" labelText={t.form.label.email} />
          <Form.Phone name="phoneNumber" labelText={t.form.label.phoneNumber} />
          <Form.Textarea
            name="message"
            labelText={t.form.label.message}
            minHeight={50}
          />
          <Form.RadioGroup
            name="gender"
            labelText={t.form.label.gender}
            options={genderRadioOptions}
          />
          <button className="button">{t.action.addToContacts}</button>
        </Form>
        <div className="contact-list">
          <h2>{t.title.contactList}</h2>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <ContactCard contact={contact} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TestModal onClose={toogleTestModal} isVisible={isTestModalOpen} />
    </section>
  );
};

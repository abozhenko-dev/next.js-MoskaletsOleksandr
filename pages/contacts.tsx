import { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title'
import { Contact } from '../interfaces';
import styles from '../styles/Contacts.module.scss'

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 'sfsdf',
      name: 'Example Name',
      email: 'example@mail.com',
      gender: 'female'
    }
  ]);
  
    const handleAddContact = (newContact: Contact): void => {
    setContacts([...contacts, newContact]);
  };

  return (
  <Layout title="Contacts | Next.js">
    <section>
        <Title title='Contacts' />
        <div className={styles.container}>
          <ContactForm handleAddContact={handleAddContact} />
          <ContactList contacts={contacts} />
        </div>
    </section>
  </Layout>
)
}

export default ContactsPage

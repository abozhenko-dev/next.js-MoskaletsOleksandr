import { useState } from 'react';
import ContactForm from '../../components/sections/contactForm';
import ContactList from '../../components/sections/contactList';
import Title from '../../components/ui/title';
import { IContact } from '../../utils';
import styles from '../../scss/Contacts.module.scss'

const Contacts = () => {
    const [contacts, setContacts] = useState<IContact[]>([
        {
            id: 'sfsdf',
            name: 'Example Name',
            email: 'example@mail.com',
            gender: 'female',
            phoneNumbers: [
                { number: '24568439874' },
                { number: '65164516355' },
            ]
        }
    ]);
  
    const handleAddContact = (newContact: IContact): void => {
        setContacts([...contacts, newContact]);
    };

    return (
        <section>
            <Title title='Contacts' />
            <div className={styles.container}>
                <ContactForm handleAddContact={handleAddContact} />
                <ContactList contacts={contacts} />
            </div>
        </section>
    )
};

export default Contacts;

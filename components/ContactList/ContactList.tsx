import { Contact } from "../../interfaces";
import styles from './ContactList.module.scss'

type Props = {
  contacts: Contact[]
}

const ContactList = ({ contacts }: Props) => (
  <div className={styles.container} >
    <h2 className={styles.title} >Contact List</h2>
    <ul className={styles.list} >
      {contacts.map(contact => (
        <li key={contact.id}>
              <strong style={{ color: `${contact.gender === 'male' ? 'rgb(2, 37, 150)' : 'rgb(199, 0, 172)'}` }}>
                  {contact.name} {contact.gender === 'male' ? '(he)' : '(she)'}
              </strong> - {contact.email}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;

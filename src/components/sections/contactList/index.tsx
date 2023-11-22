import { IContact } from '../../../utils';
import styles from './ContactList.module.scss'

type Props = {
  contacts: IContact[]
}

const ContactList = ({ contacts }: Props) => (
  <div className={styles.container} >
    <h2 className={styles.title} >Contact List</h2>
    <ul className={styles.list} >
      {contacts.map(contact => (
        <li key={contact.id}>
          <div className="container">
            <p>
              <strong style={{ color: `${contact.gender === 'male' ? 'rgb(2, 37, 150)' : 'rgb(199, 0, 172)'}` }}>
                  {contact.name} {contact.gender === 'male' ? '(he)' : '(she)'}
              </strong> - {contact.email}
            </p>
            <p>Phones: {contact.phoneNumbers.map((num) => num.number ).join('; ')}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;

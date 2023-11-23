import { IContact } from '../../../utils';
import { Contact } from '../../cards';

type Props = {
  contacts: IContact[]
}

const ContactList = ({ contacts }: Props) => (
  <div className='contact-list' >
    <h2>Contact List</h2>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;

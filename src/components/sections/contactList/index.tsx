import { IContact } from '../../../utils';

type Props = {
  contacts: IContact[]
}

const ContactList = ({ contacts }: Props) => (
  <div className='contact-list' >
    <h2>Contact List</h2>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <div className="container">
            <p>
              <strong style={{ color: `${contact.gender === 'male' ? 'var(--clr-default-600)' : 'var(--clr-default-400)'}` }}>
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

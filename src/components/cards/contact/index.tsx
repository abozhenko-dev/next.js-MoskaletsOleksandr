import { FC } from "react"
import { IContact } from "../../../utils"

type Props = {
    contact: IContact
};

export const Contact: FC<Props> = ({ contact }) => {
    return (
        <div className="container">
            <p>
                <strong style={{ color: `${contact.gender === 'male' ? 'var(--clr-default-600)' : 'var(--clr-default-400)'}` }}>
                    {contact.name} {contact.gender === 'male' ? '(he)' : '(she)'}
                </strong> - {contact.email}
            </p>
            <p>Phones: {contact.phoneNumbers.map((num) => num.number).join('; ')}</p>
        </div>
    );
};
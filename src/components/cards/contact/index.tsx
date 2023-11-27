import { FC } from "react";

import { IContact } from "@utils";

type Props = {
  contact: IContact;
};

export const ContactCard: FC<Props> = ({ contact }) => {
  const { gender, name, email, phoneNumbers, dob } = contact;

  return (
    <div className="container">
      <p>
        <strong
          style={{
            color: `${
              gender === "male"
                ? "var(--clr-default-600)"
                : "var(--clr-default-400)"
            }`
          }}
        >
          {name} {gender === "male" ? "(he)" : "(she)"}
        </strong>{" "}
        - {email}
      </p>
      <p>Date of birth: {dob.toISOString().split("T")[0]}</p>
      <p>Phones: {phoneNumbers.map((num) => num.number).join("; ")}</p>
    </div>
  );
};

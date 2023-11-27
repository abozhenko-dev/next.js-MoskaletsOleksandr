import { FC } from "react";

import { useTranslation } from "@hooks";

import { IContact } from "@utils";

type Props = {
  contact: IContact;
};

export const ContactCard: FC<Props> = ({ contact }) => {
  const { gender, name, email, phoneNumbers, dob } = contact;
  const t = useTranslation();

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
          {name}{" "}
          {gender === "male"
            ? `(${t.enums.sex.male})`
            : `(${t.enums.sex.female})`}
        </strong>{" "}
        - {email}
      </p>
      <p>
        {t.common.dob}: {dob.toISOString().split("T")[0]}
      </p>
      <p>
        {t.common.phones}: {phoneNumbers.map((num) => num.number).join("; ")}
      </p>
    </div>
  );
};

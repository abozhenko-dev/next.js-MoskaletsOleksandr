import { FC } from "react";

import { useTranslation } from "@hooks";

export const Footer: FC = () => {
  const t = useTranslation();

  return (
    <footer className="footer">
      <p>{t.common.footerText}</p>
    </footer>
  );
};

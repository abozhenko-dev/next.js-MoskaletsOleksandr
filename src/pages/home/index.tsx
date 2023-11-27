import { FC } from "react";

import { Title } from "@components";

import { useTranslation } from "@hooks";

export const Home: FC = () => {
  const t = useTranslation();

  return (
    <section>
      <Title title={t.title.homePage} />
    </section>
  );
};

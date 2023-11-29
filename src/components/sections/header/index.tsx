import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Select } from "@components/form";

import { useTranslation } from "@hooks";

import { PATHS, SelectOption } from "@utils";

import { i18n } from "../../../../next.config";

type NavItem = {
  path: string;
  text: string;
};

export const Header: FC = () => {
  const router = useRouter();
  const t = useTranslation();

  const navItems: NavItem[] = [
    { path: PATHS.root, text: t.enums.navigation.home },
    { path: PATHS.contacts, text: t.enums.navigation.contacts },
    { path: PATHS.todos, text: t.enums.navigation.todo }
  ];

  const availableLanguages: SelectOption[] = i18n.locales.map(
    (locale: string) => ({
      label: locale.toUpperCase(),
      value: locale
    })
  );

  const currentLAnguage: SelectOption = {
    label: router.locale.toUpperCase(),
    value: router.locale
  };

  const handleLanguageChange: (value: SelectOption) => void = (
    selectedLanguage
  ) => {
    const lang = selectedLanguage.value;

    router.push(router.pathname, router.asPath, { locale: lang as string });
  };

  return (
    <header className="header">
      <nav>
        {navItems.map(({ path, text }) => (
          <Link
            key={path}
            href={path}
            className={`${router.pathname === path ? "current" : ""}`}
          >
            {text}
          </Link>
        ))}
      </nav>
      <Select
        options={availableLanguages}
        onChange={handleLanguageChange}
        value={currentLAnguage}
        labelText={currentLAnguage.label}
      />
    </header>
  );
};

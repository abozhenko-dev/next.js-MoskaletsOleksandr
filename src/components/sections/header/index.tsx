import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "@hooks";

import { PATHS } from "@utils";

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
    </header>
  );
};

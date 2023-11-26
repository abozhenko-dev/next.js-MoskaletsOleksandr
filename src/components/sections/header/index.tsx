import { PATHS } from '@utils/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

type NavItem = {
  path: string;
  text: string;
};

export const Header: FC = () => {
    const router = useRouter();  
    
    const navItems: NavItem[] = [
        { path: PATHS.root, text: 'Home' },
        { path: PATHS.contacts, text: 'Contacts' },
        { path: PATHS.todos, text: 'ToDo' },
    ];

    return (
        <header className='header' >
            <nav>
                {navItems.map(({ path, text }) => (
                    <Link key={path} href={path} className={`${router.pathname === path ? 'current' : ''}`} >{text}</Link>
                ))}
            </nav>
        </header>
    );
};
import Link from 'next/link'
import styles from './Header.module.scss'
import { useRouter } from 'next/router';
import { PATHS } from '../../../utils';

type NavItem = {
  path: string;
  text: string;
};

const Header = () => {
    const router = useRouter();    
    
    const navItems: NavItem[] = [
        { path: PATHS.root, text: 'Home' },
        { path: PATHS.contacts, text: 'Contacts' },
        { path: PATHS.todos, text: 'ToDo' },
    ];

    return (
        <header className={styles.header} >
            <nav className={styles.nav} >
                {navItems.map(({ path, text }) => (
                    <Link key={path} href={path} className={`${styles.link} ${router.pathname === path ? styles.current : ''}`} >{text}</Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
import Link from 'next/link'
import { useRouter } from 'next/router';
import { PATHS } from '../../../utils';

type NavItem = {
  path: string;
  text: string;
};

const Header = () => {
    const router = useRouter();  
    console.log('sfsdf');
    
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

export default Header;
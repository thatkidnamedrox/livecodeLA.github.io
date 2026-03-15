import {Link} from 'react-router-dom';

type NavBarProps = {
    pages: string[];
};

const pages = ['Home', 'About', 'Contact', 'Join Discord', 'Follow on Instagram'];

function NavBar({ pages }: NavBarProps) {

  return (
    <nav>
         <ul>
            {pages.map((page) => (
                <li className={ page === 'Join Discord' || page === 'Follow on Instagram' ? 'social' : ''} key={page}>
                    <Link
                    to={
                        page === 'Join Discord'
                        ? 'https://discord.com/invite/cW9788YUmv'
                        : page === 'Follow on Instagram'
                        ? 'https://instagram.com/livecode.la'
                        : page === 'Home'
                        ? '/'
                        : `/${page.toLowerCase()}`
                    }
                    rel={'noopener noreferrer'}
                    color="inherit"
                    >
                    {page}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>  
  );
}

export { pages}
export default NavBar;

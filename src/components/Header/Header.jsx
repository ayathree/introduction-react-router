import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <NavLink to={'/user'}>User</NavLink>
                
                <NavLink  to={'about/'}>About</NavLink>
                
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/posts'}>Post</Link>
                
            </nav>
        </div>
    );
};

export default Header;
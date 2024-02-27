import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
export const Header = () => {
    return (
        <header>
            <Link to="/" className='logo'>
                <img src={logo} alt="WriteNode logo" />
                <span>WriteNode</span>
            </Link>
            <nav className='nav'>
                <NavLink to="/" className="link" end>Home</NavLink>
                <NavLink to="/create" className="link">Create Post</NavLink>
                <button className='auth'><i className='bi bi-google'></i>Login</button>
            </nav>
        </header>
    )
}

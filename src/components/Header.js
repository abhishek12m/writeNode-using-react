import { Link, NavLink, useNavigate } from 'react-router-dom';
import {auth,provider} from '../firbase/config';
import { signInWithPopup,signOut } from 'firebase/auth';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
export const Header = () => {
    const navigate=useNavigate();
    const [isAuth,setIsAuth]=useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    function handleLogin(){
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result);
            setIsAuth(true);
            localStorage.setItem("isAuth",true);
            navigate("/");
        })
    }
    function handleLogout(){
        signOut(auth);
        setIsAuth(false);
        // console.log("logout")
        localStorage.setItem("isAuth",false);
        navigate("/");
    }
    return (
        <header>
            <Link to="/" className='logo'>
                <img src={logo} alt="WriteNode logo" />
                <span>WriteNode</span>
            </Link>
            <nav className='nav'>
                <NavLink to="/" className="link" end>Home</NavLink>
                {isAuth ?
                    <>
                        <NavLink to="/create" className="link">Create Post</NavLink>
                        <button onClick={handleLogout} className='auth'><i className='bi bi-box-arrow-right'></i>Logout</button>
                    </>
                    :
                    <button onClick={handleLogin} className='auth'><i className='bi bi-google'></i>Login</button>
                }
            </nav>
        </header>
    )
}

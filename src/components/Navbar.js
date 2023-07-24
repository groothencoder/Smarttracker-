import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ImHome3,ImCalendar,ImLibrary} from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import { RiCalendarTodoLine } from "react-icons/ri";

const Navbar = () => {
    const [active, IsActive] = useState(false);
    const { loginWithRedirect} = useAuth0();
    const { logout,isAuthenticated } = useAuth0();
    // const { user} = useAuth0();
    const handleNavClick = () =>{
        IsActive(false);
    }

    return(
        <div className='Navbar'>
            <span className='nav-logo'>
                <img src={"logo192.png"} alt="" />
            </span>

            <div className={`nav-items ${active && "switch"}`}>
                <Link to={"/"} onClick={handleNavClick}><ImHome3 />&nbsp;Home</Link>
                <Link to={"/about"} onClick={handleNavClick}><ImLibrary/>&nbsp;Tracker</Link>
                <Link to={"/services"} onClick={handleNavClick}><RiCalendarTodoLine/>&nbsp;Todo</Link>
                <Link to={"/contact"} onClick={handleNavClick}><ImCalendar/>&nbsp;Calender</Link>
                {/* {isAuthenticated && (<li> <p>{user.name}</p></li> )} */}
                {isAuthenticated ? (
                    <button>
                    <Link to={"/logout"} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>SignOut</Link>
                    </button>

                
                ):(
<button>
                <Link to={"/login"} onClick={() => loginWithRedirect() }>Sign In</Link>
                </button>
                
                )};
            </div>

            <div className={`nav-toggle ${active && "switch"}`}
            onClick={() => IsActive(!active)}>
                <div className='hamburger'></div>
            </div>
        </div>
    );
};

export default Navbar;
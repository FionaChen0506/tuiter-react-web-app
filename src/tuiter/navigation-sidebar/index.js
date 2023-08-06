import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavigationSidebar = () => {
  
  const { pathname } = useLocation();
  const [,, active] = pathname.split("/");
  const { currentUser } = useSelector((state) => state.user);
  // const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "more"];
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
           {link}
         </Link>
         
     )}
     
     {!currentUser &&<NavLink
          className="list-group-item"
          activeClassName="active"
          to="/tuiter/login"
        >
          Login
        </NavLink>}
     {!currentUser &&         <NavLink
          className="list-group-item"
          activeClassName="active"
          to="/tuiter/register"
        >
          Register
        </NavLink>}
     {/* {currentUser && <Link className="list-group-item" to="/tuiter/profile"> Profile </Link>} */}
    {currentUser &&         <NavLink
          className="list-group-item"
          activeClassName="active"
          to="/tuiter/profile"
        >
          Profile
        </NavLink>}
   </div>
 );
};
export default NavigationSidebar;
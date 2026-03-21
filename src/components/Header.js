 import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
export const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus ? '🟢' : '⛔'}</li>
          <li><Link to='/'> Home </Link> </li>
          <li><Link to='/about'> About Us </Link> </li>
          <li><Link to='/grocery'> Grocery </Link> </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
          className="loginBtn" onClick={() => {
            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
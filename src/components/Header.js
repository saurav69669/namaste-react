 import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
 
export const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to='/'> Home </Link> </li>
          <li><Link to='/about'> About Us </Link> </li>
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
 import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 
export const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-blue-100 shadow-lg p-2">
      <div>
        <img className="logo w-25" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex gap-4 items-center">
          <li>Status: {onlineStatus ? '🟢' : '⛔'}</li>
          <li><Link to='/'> Home </Link> </li>
          <li><Link to='/about'> About Us </Link> </li>
          <li><Link to='/grocery'> Grocery </Link> </li>
          <li><Link to='/contact'> Contact Us </Link></li>
          <li>Cart</li>
          <button
          className="loginBtn bg-amber-200 p-2 rounded cursor-pointer" onClick={() => {
            btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
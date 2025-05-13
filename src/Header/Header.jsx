import React from 'react';
import logo from './img/logo.png'
import './Header.css';
import BtnCart from "./Cart/Cart"
import { IoIosNotifications } from "react-icons/io";
import SearchForm from '../Search/SearchForm';
import BtnLogin from './User/Login';
import { Link } from 'react-router-dom'; 






function Header() {

  


  return (
  
      <header className="Header">
         <div className="logo">
        <Link to="/">
          <img src={logo} alt="Amazyka Logo" />
        </Link>
      </div>

        <div className="menu"></div>
        <SearchForm />

        <div className="icon-header">
            
            <BtnCart/>
            <IoIosNotifications size={30} color="gray"/>
            <BtnLogin/>
        </div>

       





      </header>

  );
}

export default Header;

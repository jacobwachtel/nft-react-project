import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
   return (
      <header className="header">
         <div className="logo-container">
            <img src={punkLogo} className="punk-logo" alt="" />
         </div>
         {/* Search bar */}
         <div className="search-bar">
            <div className="search-icon">
               <img src={searchIcon} alt="" />
            </div>
            <input
               className="input-bar"
               placeholder="Collection, item or user..."
            />
         </div>
         {/* Navigation links */}
         <nav>
            <ul className="nav-list">
               <li>Drps</li>
               <li>Mrkt</li>
               <li>Create</li>
            </ul>
         </nav>
         {/* night mode switch */}
         <div className="header-actions">
            <div className="theme-switch-icon">
               <img src={themeSwitchIcon} alt="" />
            </div>
         </div>
         {/* Login Button */}
         <div className="login">Get In</div>
      </header>
   );
};

export default Header;

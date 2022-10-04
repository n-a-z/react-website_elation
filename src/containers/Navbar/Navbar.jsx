import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.scss';
import logoFull from '../../images/logo_full.png';
import logoSmall from '../../images/logo_small.png';
import iconQuestion from '../../images/footer_icon_01.png';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => {
        setToggleMenu(!toggleMenu);
        if (!toggleMenu) document.getElementsByTagName('html')[0].style.overflow = "hidden";
        else document.getElementsByTagName('html')[0].style.overflow = "unset";
    }
    return (
        <nav className='my-navbar'>
            <div className="my-navbar__container">
                <a href="#Us" className='navbar__img-link'>
                    <img src={logoFull} className='navbar__img' alt="Logo" />
                </a>
                <RiMenu3Line className="my-navbar__toggle" onClick={handleClick} />
            </div>
            <div className={toggleMenu ? 'my-navbar__menu my-navbar__menu--active' : 'my-navbar__menu'}>
                <RiCloseLine className="my-navbar__toggle my-navbar__toggle--close" onClick={handleClick} />
                <img src={logoSmall} className='navbar__img' alt="Logo" />
                <ul className="my-navbar__list">
                    <li className='my-navbar__menu-item'>
                        <a href="#us" className='my-navbar__menu-link' onClick={handleClick}>Us</a>
                    </li>
                    <li className='my-navbar__menu-item'>
                        <a href="#you" className='my-navbar__menu-link' onClick={handleClick}><span className='underline'>You</span></a>
                    </li>
                    <li className='my-navbar__menu-item'>
                        <a href="#services" className='my-navbar__menu-link' onClick={handleClick}>Services</a>
                    </li>
                    <li className='my-navbar__menu-item'>
                        <a href="#cta" className='my-navbar__menu-link' onClick={handleClick}>Contact</a>
                    </li>
                </ul>
                <div className="my-navbar__icon-container">
                    <a href="#icon-link" className="my-navbar__icon-link" onClick={handleClick}>
                        <img src={iconQuestion} className="my-navbar__icon" alt="icon" />
                    </a>
                    <a href="#icon-link" className="my-navbar__icon-link" onClick={handleClick}>
                        <img src={iconQuestion} className="my-navbar__icon" alt="icon" />
                    </a>
                    <a href="#icon-link" className="my-navbar__icon-link" onClick={handleClick}>
                        <img src={iconQuestion} className="my-navbar__icon" alt="icon" />
                    </a>
                    <a href="#icon-link" className="my-navbar__icon-link" onClick={handleClick}>
                        <img src={iconQuestion} className="my-navbar__icon" alt="icon" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
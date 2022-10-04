import React from 'react';
import './Footer.scss';
import { ScrollTop } from '../../components';
import logoSmall from '../../images/logo_small.png';
import iconQuestion from '../../images/footer_icon_01.png';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container container">
        <div className="footer__row row">
          <div className="footer__col col-12 col-lg-2">
            <img className="footer__logo" src={logoSmall} alt="Logo" />
            <span className="footer__copy">© 2019 Elation.<br />All rights reserved.</span>
          </div>
          <div className="footer__col col-12 col-lg-2">
            <span className="footer__item footer__item--title">Products</span>
            <div className="footer__item-container">
              <a href="#target" className="footer__item footer__item--link">Growth Framework</a>
              <a href="#target" className="footer__item footer__item--link">Growth Academy</a>
              <a href="#target" className="footer__item footer__item--link">Growth Club</a>
            </div>
            <a href="#target" className="footer__item footer__item--link"><span className='underline underline--green'>Terms & Conditions</span></a>
          </div>
          <div className="footer__col col-12 col-lg-2">
            <span className="footer__item footer__item--title">Products</span>
            <div className="footer__item-container">
              <a href="#target" className="footer__item footer__item--link">Growth Framework</a>
              <a href="#target" className="footer__item footer__item--link">Growth Academy</a>
              <a href="#target" className="footer__item footer__item--link">Growth Club</a>
            </div>
            <a href="#target" className="footer__item footer__item--link"><span className='underline underline--green'>Terms & Conditions</span></a>
          </div>
          <div className="footer__col col-12 col-lg-2">
            <span className="footer__item footer__item--title">Products</span>
            <div className="footer__item-container">
              <a href="#target" className="footer__item footer__item--link">Growth Framework</a>
              <a href="#target" className="footer__item footer__item--link">Growth Academy</a>
              <a href="#target" className="footer__item footer__item--link">Growth Club</a>
            </div>
            <a href="#target" className="footer__item footer__item--link"><span className='underline underline--green'>Terms & Conditions</span></a>
          </div>
          <div className="footer__col col-12 col-lg-4">
            <div className="footer__group">
              <div className="footer__icon-container">
                <img className="footer__icon" src={iconQuestion} alt="Icon" />
                <img className="footer__icon" src={iconQuestion} alt="Icon" />
                <img className="footer__icon" src={iconQuestion} alt="Icon" />
                <img className="footer__icon"src={iconQuestion} alt="Icon" />
              </div>
              <div className="footer__txt">
                Subscribe to our newsletter and stay in the loop.
              </div>
              <div className="footer__signup">
                <span className="footer__signup-txt">Signup</span>
                <span className="footer__signup-icon">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </section>
  )
}

export default Footer
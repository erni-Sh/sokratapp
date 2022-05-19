/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import MobileLogo from '../../img/sokrat-logo.svg';

import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function MobileMenu({visible = false, setVisible, isCompare, setVisiblePopUpCompare}) {
  let html = document.getElementsByTagName('html')[0];
  visible && html.classList.add("fixed");

  const closeMenu = () => {setVisible(false); html.classList.remove("fixed"); }

  return (
    <header className={visible ? 'mobile-menu' : 'mobile-menu mobile-menu__hidden'}>
      <div className="mobile-menu__header">
        <div className="mobile-menu__header__logo">
          <a href="index.html">
            <img className="logo-mobile" src={MobileLogo} width={198} height={40} alt="На главную" />
          </a>
        </div>
        <div className="mobile-menu__header__cancel" onClick={closeMenu} >
          <button><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30">
              <g id="cancel" transform="translate(0 -0.001)">
                <g id="Сгруппировать_8931" data-name="Сгруппировать 8931" transform="translate(0 0.001)">
                  <path id="Контур_21499" data-name="Контур 21499" d="M16.657,15l13-13A1.172,1.172,0,0,0,28,.344l-13,13L2,.344A1.172,1.172,0,0,0,.343,2l13,13-13,13A1.172,1.172,0,0,0,2,29.658l13-13,13,13A1.172,1.172,0,1,0,29.657,28Z" transform="translate(0 -0.001)" fill="#24272d" />
                </g>
              </g>
            </svg></button>
        </div>
      </div>
      <nav className="mobile-menu__nav">
        <ul>
          <li onClick={closeMenu}>
            <NavLink
              to={AppRoute.COURSES}
              exact
            >
              Каталог курсов
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to={AppRoute.PRACTICES}
              exact
            >
              Вакансии
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <a href="#" onClick={() => setVisiblePopUpCompare(true)}>Сравнить </a>
            {isCompare && <div className="mobile-menu__indicator" />}
          </li>
        </ul>
      </nav>
    </header>
  );
}

MobileMenu.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
  isCompare: PropTypes.bool.isRequired,
};

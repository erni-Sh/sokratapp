/* eslint-disable */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
// import Download from '../download/download';
import Search from '../search/search';
// import styles from './header.module.css';
import logo from '../../img/sokrat-logo.svg';
// import bookmarkIcon from '../../img/list.svg';
// import bookmarkIconRed from '../../img/list-red.svg';

// import compareIcon from '../../img/icons/compare-icon.svg';

import cameraIcon from '../../img/camera-icon.svg';
import menuIcon from '../../img/menu.svg';
import searchIcon from '../../img/search-icon.svg';

import MobileMenu from '../mobile-menu/mobile-menu';
import PopUpCompare from '../popup-compare/popup-compare';
import PopUpApp from '../popup-app/popup-app';

import { useSelector } from 'react-redux';

export function Header() {
  const [ visiblePopUpCompare, setVisiblePopUpCompare ] = useState();
  const [ visiblePopUpApp, setVisiblePopUpApp ] = useState();
  const [ visibleMobileMenu, setVisibleMobileMenu ] = useState();
  const [ visibleSearch, setVisibleSearch ] = useState();

  // get list compare
  // const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare);
  const isCompare = compare.courses.length > 0;

  return (
    <>
      <MobileMenu
        visible={visibleMobileMenu}
        setVisible={setVisibleMobileMenu}
        isCompare={isCompare}
        setVisiblePopUpCompare={setVisiblePopUpCompare}
      />
      <header className='header'>
        <div className='top-bar'>
          <div className="top-bar__container container">
            <p className='top-bar__content'>
              Ищите знания
              <br />в приложении Sokrat.
            </p>
            <button className="btn btn--pink" id="app" onClick={() => setVisiblePopUpApp(true)}>Скачать</button>
          </div>
        </div>

        <div className='header__wrapper'>
          <div className='header__inner-wrapper'>
            <Link to={AppRoute.ROOT} className='logo'>
              <img
                src={logo}
                alt='Sokrat Logo'
                className='logo__img'
                width='157'
                height='36'
              />
            </Link>

            <div className='wrapper_menu-search'>
              <div className={`main-nav${visibleSearch ? ' hidden' : ''}`}>
                <nav className='main-nav__wrapper'>
                  <ul className='main-nav__list'>
                    <li className='main-nav__item'>
                      <NavLink
                        to={AppRoute.COURSES}
                        className='main-nav__link'
                        activeClassName='main-nav__link--active'
                        exact
                      >
                        Каталог курсов
                      </NavLink>
                    </li>
                    <li className='main-nav__item'>
                      <NavLink
                        to={AppRoute.PRACTICES}
                        className='main-nav__link'
                        activeClassName='main-nav__link--active'
                        exact
                      >
                        Вакансии
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <Search
                visible={visibleSearch}
                setVisible={setVisibleSearch}
              />
            </div>
            <div className='user'>
              <div className="user__search" id="search">
                <div className={`user__search-close${visibleSearch ? '' : ' disable'}`} onClick={()=>setVisibleSearch(false) }/>
                <img src={searchIcon} alt="" className={`user__search-img${visibleSearch ? ' disable' : ''}`} width={31} height={20} onClick={()=>setVisibleSearch(true) }/>
              </div>
              <div className='user__bookmark' onClick={() => setVisiblePopUpCompare(true)}>
                <svg
                  className={`user__bookmark-img${isCompare ? ' is-compare' : ''}`}
                  width='31'
                  height='31'
                >
                  <use xlinkHref='#compare-icon'></use>
                </svg>
              </div>
              <div className='user__login'>
                <p className='user__greeting'>
                  Привет, <span className='user__name'>Друг</span>
                </p>
                <p className='user__text'>Что нового узнаем сегодня?</p>
              </div>
              <div className='user__photo'>
                <img
                  src={cameraIcon}
                  alt=''
                  className='user__photo-img'
                  width='16'
                  height='14'
                />
              </div>
              <button className="main-nav__toggle" type="button">
                <img src={menuIcon} alt="Открыть меню" className="main-nav__toggle-img" width={30} height={30} onClick={()=>setVisibleMobileMenu(true)}/>
              </button>
              {isCompare &&
              <p className="main-nav__indicator indicator main-nav__indicator--checked-closed"></p>}
            </div>
          </div>
        </div>
      </header>
      <PopUpCompare
        visible={visiblePopUpCompare}
        setVisible={setVisiblePopUpCompare}
      />
      <PopUpApp
        visible={visiblePopUpApp}
        setVisible={setVisiblePopUpApp}
      />
    </>
  );
}

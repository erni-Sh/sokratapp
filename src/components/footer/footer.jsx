import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Download from '../download/download';
import sokratLogoImage from '../../img/sokrat-logo.svg';

import PopUpDescr from '../popup-descr/popup-descr';
import {privacyPolicy} from '../official-docs/privacy-policy.jsx';
import {userAgreement} from '../official-docs/user-agreement.jsx';

// import PopUpConfidentiality from '../popup-confidentiality/popup-confidentiality';
// import PopUpConditions from '../popup-conditions/popup-conditions';

export function Footer() {

  const [ visibleConfident, setVisibleConfident ] = useState(false);
  const [ visibleConditions, setVisibleConditions ] = useState(false);

  return (
    <>
      <footer className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__left-col'>
            <div className='footer__col-wrapper'>
              <div className='footer__nav-wrapper'>
                <p className='footer__nav-title'>Пользователям</p>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-item'>
                    <Link to={AppRoute.COURSES} className='footer__nav-link'>
                      Все курсы
                    </Link>
                  </li>
                  <li className='footer__nav-item'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScjF9rQ0MI5Kz-AVM22pCBvtBmPd8f5_Q6kNQhTvcapAke1qg/viewform?usp=sf_link' className='footer__nav-link' target='_blank' rel='nofollow noreferrer'>
                      Консультант
                    </a>
                  </li>
                  <li className='footer__nav-item'>
                    <Link to='#' className='footer__nav-link'>
                      Оплата обучения
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='footer__nav-wrapper'>
                <p className='footer__nav-title'>Партнерам</p>
                <ul className='footer__nav-list'>
                  <li className='footer__nav-item'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc5Gmr23v8sh7c8rtnNq-GCcFlM3GdM1V8gmdZVpKQOUjLq_g/viewform?usp=sf_link' className='footer__nav-link' target='_blank' rel='nofollow noreferrer'>
                      Как это работает?
                    </a>
                  </li>
                  <li className='footer__nav-item'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeC9a4IfpEKyMbE3-sfA8GM7lUXDjje5XZFoi93EV8K291u6Q/viewform?usp=sf_link' className='footer__nav-link' target='_blank' rel='nofollow noreferrer'>
                      Подключиться
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='socials'>
              <p className='socials__title'>Мы в социальных сетях</p>
              <ul className='socials__list'>
                {/*<li className='socials__item'>
                <span className='visually-hidden'>Инстаграм</span>
                  <Link to='#' className='socials__link'>
                    <svg
                      className='socials__icon socials__icon--instagram'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#icon-instagram'></use>
                    </svg>
                  </Link>
                </li>*/}
                <li className='socials__item'>
                  <span className='visually-hidden'>Фейсбук</span>
                  <a href='https://dobro.ru/organizations/10024924/info' className='socials__link' target='_blank' rel='nofollow noreferrer'>
                    <svg
                      className='socials__icon socials__icon--facebook'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#dobro-icon'></use>
                    </svg>
                  </a>
                </li>
                <li className='socials__item'>
                  <span className='visually-hidden'>Ссылка на ВКонтакте</span>
                  <a href='https://vk.com/sokratmobile' className='socials__link' target='_blank' rel='nofollow noreferrer'>
                    <svg
                      className='socials__icon socials__icon--vk'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#icon-vk'></use>
                    </svg>
                  </a>
                </li>
                <li className='socials__item'>
                  <span className='visually-hidden'>Ссылка на Яндекс.Дзен</span>
                  <Link to='#' className='socials__link'>
                    <svg
                      className='socials__icon socials__icon--vk'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#icon-yandex-zen'></use>
                    </svg>
                  </Link>
                </li>
                <li className='socials__item'>
                  <span className='visually-hidden'>Ссылка на Ватсапп</span>
                  <a href='https://wa.me/message/TQB67G5A7ZBSG1' className='socials__link' target='_blank' rel='nofollow noreferrer'>
                    <svg
                      className='socials__icon socials__icon--vk'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#whatsapp-icon'></use>
                    </svg>
                  </a>
                </li>
                <li className='socials__item'>
                  <span className='visually-hidden'>Ссылка на Телеграмм</span>
                  <a href='https://t.me/sokratsupport' className='socials__link' target='_blank' rel='nofollow noreferrer'>
                    <svg
                      className='socials__icon socials__icon--vk'
                      width='31'
                      height='31'
                    >
                      <use xlinkHref='#tg-icon'></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer__right-col'>
            <div className='logo logo--footer'>
              <Link to={AppRoute.ROOT} className='logo__link'>
                <img
                  src={sokratLogoImage}
                  alt='Sokrat Logo'
                  className='logo__img--footer'
                  width='223'
                  height='51'
                />
              </Link>

              <p className='logo__text'>Тысячи знаний внутри</p>
            </div>
            <Download />
          </div>
        </div>
        <div className='bottom-bar'>
          <div className='bottom-bar__wrapper'>
            <ul className='bottom-bar__nav-list'>
              <li className='bottom-bar__nav-item'>
                <Link to='#' className='bottom-bar__nav-link' onClick={() => setVisibleConditions(true)}>
                  Условия использования
                </Link>
              </li>
              <li className='bottom-bar__nav-item' onClick={() => setVisibleConfident(true)}>
                <Link to='#' className='bottom-bar__nav-link'>
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>

            <p className='bottom-bar__copyright'>
              © <span className='bottom-bar__copyright-year'>2021</span> Sokrat.
              Все права защищены
            </p>
          </div>
        </div>
      </footer>

      {(navigator.userAgent !== 'ReactSnap') &&
      <>
        <PopUpDescr
          visible={visibleConfident}
          setVisible={setVisibleConfident}
          title='Политика конфиденциальности'
        >
          {privacyPolicy}
        </PopUpDescr>
        <PopUpDescr
          visible={visibleConditions}
          setVisible={setVisibleConditions}
          title='Пользовательское соглашение'
        >
          {userAgreement}
        </PopUpDescr>
      </>}
    </>
  );
}

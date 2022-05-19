/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCookieAgreeAction } from '../../store/cookie-reducer/cookie-reducer.js';

export default function PopUpCookie() {
  // не показываем для SEO
  if(navigator.userAgent === 'ReactSnap') return false;

  const dispatch = useDispatch();
  const stateCookieAgree = useSelector((state) => state.cookieAgree);
  // console.log(stateCookieAgree);
  
  const [ visibleCookie, setVisibleCookie ] = useState(false);
  const [ showed, setShowed ] = useState(false);

  useEffect(() => {
    !showed && !stateCookieAgree &&
    setTimeout(() => {
      setVisibleCookie(true);
      setShowed(true);
    }, 1000);
  });

  const onButtonClick = () => {
    setVisibleCookie(false);
    dispatch(setCookieAgreeAction());
  }

  return (
    <section className={visibleCookie ? 'popup-cookie' : 'popup-cookie popup-cookie--hidden'}>
      <div className="popup-cookie__block">
        <p className="popup-cookie__text">
          Мы, как и все,
          используем <a className="popup-cookie__link" id="cookie" href="/">cookie</a>
        </p>
        <button className="popup-cookie__button btn" id="app" onClick={onButtonClick}>Я понимаю</button>
      </div>
    </section>
  );
}

/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function PopUpApp({visible, setVisible}) {

  let html = document.getElementsByTagName('html')[0];
  visible && html.classList.add("fixed");

  const closePopUpApp = () => {
    setVisible(false);
    html.classList.remove("fixed");
  };

  return (
    <section className={visible ? 'popup-app' : 'popup-app popup-app--hidden'} onClick={closePopUpApp}>
      <div className="popup-app__block" onClick={(e) => e.stopPropagation()}>
        <button className="popup-app__close" id="category" type="button" onClick={closePopUpApp} />
        <p className="popup-app__slogan">Удобнее искать знания в приложении</p>
        <p className="popup-app__text">
          Скачайте мобильное приложение Sokrat., чтобы иметь самый быстрый доступ к новым курсам.
        </p>
        <div className="popup-app__links">
          <a className="popup-app__link" href="https://apps.apple.com/ru/app/sokrat/id1548987952" target="_blank" rel="noopener noreferrer nofollow">
            <img className="popup-app__img popup-app__img--store" src="/img/popup/app-store-btn.svg" alt="Скачать с App Store" width={200} height={67} />
          </a>
          <a className="popup-app__link" href="https://play.google.com/store/apps/details?id=space.jscorp.sokrat" target="_blank" rel="noopener noreferrer nofollow">
            <img className="popup-app__img popup-app__img--google" src="/img/popup/google-play-btn.svg" alt="Скачать Google Play" width={247} height={67} />
          </a>
        </div>
      </div>
    </section>
  );
}

PopUpApp.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

PopUpApp.defaultProps = {
  visible: false,
};

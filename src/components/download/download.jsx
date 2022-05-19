import React from 'react';
import PropTypes from 'prop-types';
import appStoreImage from '../../img/app-store-btn.svg';
import googlePlayImage from '../../img/google-play-btn.svg';

function Download({ isTitleVisible, className }) {
  return (
    <div className={`download ${className}`}>
      {isTitleVisible && <p className='download__title'>Скачай на свой телефон</p>}
      <div className='download__btn-wrapper'>
        <a
          href='https://apps.apple.com/ru/app/sokrat/id1548987952'
          className='download__btn-link download__btn-link--appstore'
          target='_blank'
          rel='noreferrer noopener nofollow'
        >
          <img
            src={appStoreImage}
            alt='Скачать с App Store'
            className='download__btn-appstore-img'
            width='135'
            height='45'
          />
        </a>

        <a
          href='https://play.google.com/store/apps/details?id=space.jscorp.sokrat&hl=ru&gl=US'
          className='download__btn-link download__btn-link--gplay'
          target='_blank'
          rel='noreferrer noopener nofollow'
        >
          <img
            src={googlePlayImage}
            alt='Скачать Google Play'
            className='download__btn-gplay-img'
            width='152'
            height='45'
          />
        </a>
      </div>
    </div>
  );
}

Download.propTypes = {
  isTitleVisible: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

Download.defaultProps = {
  isTitleVisible: true,
  className: '',
};

export default Download;

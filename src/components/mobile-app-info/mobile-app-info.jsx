import React from 'react';
import appStoreImage from '../../img/app-store-btn.svg';
import googlePlayImage from '../../img/google-play-btn.svg';

export function MobileAppInfo() {
  return (
    <section className='cta'>
      <div className='container'>
        <h2 className='visually-hidden'>
          Скачайте приложение Sokrat в Google play или App Store
        </h2>
        <div className='cta__wrapper'>
          <div className='cta__content-wrapper'>
            <p className='cta__title'>Удобнее искать знания в приложении</p>
            <p className='cta__text'>
              Скачайте мобильное приложение Sokrat., чтобы иметь самый быстрый
              доступ к новым курсам.
            </p>

            <div className='cta__download-btn'>
              <a
                href='https://apps.apple.com/ru/app/sokrat/id1548987952'
                className='cta__download-btn-link cta__download-btn-link--appstore'
                target='_blank'
                rel='noreferrer noopener nofollow'
              >
                <img
                  src={appStoreImage}
                  alt='Скачать с App Store'
                  className='cta__btn-appstore-img'
                  width='135'
                  height='45'
                />
              </a>

              <a
                href='https://play.google.com/store/apps/details?id=space.jscorp.sokrat&hl=ru&gl=US'
                className='cta__download-btn-link cta__download-btn-link--gplay'
                target='_blank'
                rel='noreferrer noopener nofollow'
              >
                <img
                  src={googlePlayImage}
                  alt='Скачать Google Play'
                  className='cta__btn-gplay-img'
                  width='152'
                  height='45'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

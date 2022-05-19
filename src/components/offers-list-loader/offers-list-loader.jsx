/* eslint-disable*/
import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import styles from './offers-list-loader.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from 'nanoid';

import classNames from 'classnames';
import { Breakpoint } from '../../const';

function OffersListLoader() {
  const loaderTitle = (
    <ContentLoader className='loader-descr' height={25} >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="25" viewBox="0 0 380 70" />
    </ContentLoader>
  )

  let loader;
  for(let count=0;  count < 6; count++) {
    loader = (
      <>
        {loader}
        <SwiperSlide className={styles.SwiperSlide} key={nanoid()} >
          <ContentLoader
            // speed={2}
            width={325}
            height={384}
            // viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="325" height="384" />
          </ContentLoader>
        </SwiperSlide>
      </>
    );
  }

  return (
    <section className="carousel carousel--full">
      <div className='carousel__wrapper'>
        <h2 className='carousel__title'>{loaderTitle}</h2>
        <div className={`carousel__list ${styles.CarouselList}`}>
          <Swiper
            spaceBetween={3.1}
            autoplay={{
              delay: 7000,
            }}
            slidesPerView='auto'
          >
            {loader}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// OffersListLoader.propTypes = {
//   slidesCount: PropTypes.number.isRequired,
//   isWrapper: PropTypes.bool.isRequired,
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };

// OffersListLoader.defaultProps = {
//   slidesCount: DEFAULT_SLIDES_COUNT,
//   isWrapper: false,
//   width: DEFAULT_WIDTH_IN_PX,
//   height: DEFAULY_HEIGHT_IN_PX,
// };

export default OffersListLoader;

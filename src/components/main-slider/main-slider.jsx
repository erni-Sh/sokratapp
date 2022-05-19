/* eslint-disable */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import PropTypes from 'prop-types';
import MainSliderLoader from '../main-slider-loader/main-slider-loader';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import './main-slider.css';
// import { campaign } from '../../types/prop-types';
import PopUpPromotion from '../popup-promotion/popup-promotion';


const SPACE_BETWEEN_SLIDES_IN_PX = 20;
const AUTOPLAY_DELAY_IN_MS = 5000;
// const IMG_WIDTH_IN_PX = 700;
// const IMG_HEIGHT_IN_PX = 450;

SwiperCore.use([Pagination, Autoplay]);

export function MainSlider({ campaigns, isLoading }) {

  const [visiblePromoPopUp, setVisiblePromoPopUp] = useState(false);
  const [contentPromoPopUp, setContentPromoPopUp] = useState({});
  let content;

// console.log(campaigns);

  if (isLoading) {
    content = <MainSliderLoader />;
  } else {
    content = (
      <>
        <Swiper
          className='main-page-swiper__swiper'
          slidesPerView='auto'
          spaceBetween={SPACE_BETWEEN_SLIDES_IN_PX}
          pagination={{
            el: '.main-page-swiper__pagination',
            clickable: true,
          }}
          autoplay={{
            delay: AUTOPLAY_DELAY_IN_MS,
          }}
        >
          {campaigns.map((contentPromo) => {
            const { id, picture_promo: picturePromo } = contentPromo;

            return (
              <SwiperSlide className='main-page-swiper__swiper-wrapper' key={id}>
                {/*<div
                  className="main-page-swiper__swiper-slide"
                  style={{
                    backgroundImage: `url("${picturePromo}")`,
                  }}
                  onClick={() => {
                    setContentPromoPopUp(contentPromo);
                    setVisiblePromoPopUp(true);
                  }}
                />*/}

                <div className="main-page-swiper__swiper-slide">
                  <img
                    className="main-page-swiper__swiper-slide-img"
                    onLoad={(e)=>{
                      e.target.classList.add("main-page-swiper__swiper-slide-img-visible");
                    }}
                    src={picturePromo}
                    onClick={() => {
                      setContentPromoPopUp(contentPromo);
                      setVisiblePromoPopUp(true);
                    }}
                  />
                </div>
              </SwiperSlide>
            );})}
        </Swiper>

        <div className='main-page-swiper__pagination swiper-pagination' />
      </>
    );
  }

  return (
    <section className='main-page-swiper'>
      <div className='main-page-swiper__wrapper'>
        {/*<h1 className='visually-hidden'>Sokrat — Тысячи знаний внутри</h1>*/}
        {content}
        {!isLoading &&
        <PopUpPromotion
          visible={visiblePromoPopUp}
          setVisible={setVisiblePromoPopUp}
          contentPromo={contentPromoPopUp}
        />}
      </div>
    </section>
  );
}

MainSlider.propTypes = {
  // campaigns: PropTypes.arrayOf(campaign),
  campaigns: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

MainSlider.defaultProps = {
  campaigns: [],
};

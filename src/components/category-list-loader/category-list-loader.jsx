/*eslint-disable*/
import React from 'react';
import ContentLoader from 'react-content-loader';
import { Swiper, SwiperSlide } from 'swiper/react';

const DEFAULT_SLIDES_COUNT = 5;
// const IMG_WIDTH_IN_PX = 190;
// const IMG_HEIGHT_IN_PX = 190;
// const SLIDES_HORIZONTAL_GAP_IN_PX = 27;
// const SLIDES_START_X_IN_PX = 0;
// const SLIDES_START_Y_IN_PX = 0;
// const TEXT_LINE_HEIGHT_IN_PX = 20;
// const FIRST_TEXT_LINE_Y_IN_PX = 200;
// const SECOND_TEXT_LINE_Y_IN_PX = 230;
// const BORDER_RADIUS_IN_PX = 20;

function CategoryListLoader(props) {
  const slides = Array(DEFAULT_SLIDES_COUNT).fill(null);

  return (
      <Swiper
        slidesPerView='auto'
        autoplay={{
          delay: 10000,
        }}
        breakpoints={{
          768: {
            spaceBetween: 22,
          },
          0: {
            spaceBetween: 10,
          },          
        }}        
      >
        {slides.map((_, arrayIndex) => {
          return (
            <SwiperSlide key={arrayIndex} virtualIndex={arrayIndex} >
              <div className="block-filter__item--user-categories">
               <ContentLoader className='loader-square' width="193" height="193">
                  <rect x="0" y="0" rx="10" ry="10" width="193" height="193" />
                </ContentLoader>
                <span className="block-filter__name block-filter__name--user-categories">
                  <ContentLoader className='loader-descr' height={20} >
                    <rect x="35" y="0" rx="10" ry="10" width="120" height="18" viewBox="0 0 193 70" />
                  </ContentLoader>
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
}

export default CategoryListLoader;

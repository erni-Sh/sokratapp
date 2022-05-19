/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { partner } from '../../types/prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import styles from './partners.module.css';
import 'swiper/swiper.min.css';
import PartnersLoader from '../partners-loader/partners-loader';
import { generateAppRoute } from '../../utils/util';
import { AppRoute } from '../../const';
import { nanoid } from 'nanoid';

const SLIDES_PER_VIEW = 6;
const SLIDER_OFFSET_IN_PX = 10;
const IMG_WIDTH_IN_PX = 193;
const IMG_HEIGHT_IN_PX = 193;

SwiperCore.use([Navigation, Virtual]);

// TODO Loading/Error state

export function Partners(props) {
  const { title, partners, isLoading, componentId } = props;
  // console.log(partners);
  const componentUniqClassName = `partners-${componentId}`;
  let content = null;
  const reInitSwiper = (swiper) => setTimeout(() => swiper.update());

  if (isLoading) {
    content = <PartnersLoader />;
  } else if (!partners.length) {
    return null;
  } else {
    content = (
      <>
        <Swiper
          navigation={{
            nextEl: `.${componentUniqClassName}.carousel__btn-prev`,
            prevEl: `.${componentUniqClassName}.carousel__btn-next`,
          }}
          // slidesOffsetAfter={SLIDER_OFFSET_IN_PX}
          // slidesOffsetBefore={SLIDER_OFFSET_IN_PX}
          spaceBetween={21}
          freeMode
          virtual={{
            cache: true,
            addSlidesAfter: SLIDES_PER_VIEW,
            addSlidesBefore: SLIDES_PER_VIEW,
          }}
          // slidesPerView='auto'
          autoplay={{
            delay: 9000,
          }}
          // swiperOptions={{
          //   slidesPerView: 'auto'
          // }}          
          breakpoints={{
            1350: {
              slidesPerView: SLIDES_PER_VIEW,
            },
            1111: {
              slidesPerView: 5,
            },
            950: {
              slidesPerView: 4,
            },
            678: {
              slidesPerView: 3,
            },               
            533: {
              slidesPerView: 2.2,
            },             
            464: {
              slidesPerView: 2,
            },            
            372: {
              slidesPerView: 1.7,
            },
            0: {
              slidesPerView: 1.3,
              // spaceBetween: 15,
            },
          }}
          // Reinitialise swiper right after first initialisation.
          // Otherwise virtual mode will ignore slidesPerView.
          onInit={reInitSwiper}
          className="w-100"
        >
          {partners.map((partner, arrayIndex) => {
            const { logo_png: logoPng, since, slug, title } = partner;
            const routePath = generateAppRoute(AppRoute.PARTNER, slug);

            return (
              <SwiperSlide
                className={styles.SwiperSlide}
                key={nanoid()}
                // virtualIndex={arrayIndex}
              >
                <div className={`partners__item ${styles.PartnersItem}`}>
                  <Link to={routePath} className='partners__img-link'>
                    {logoPng
                      ? (
                        <img
                          className={`partners__img ${styles.PartnersImg}`}
                          src={logoPng}
                          alt={since}
                          width={IMG_WIDTH_IN_PX}
                          height={IMG_HEIGHT_IN_PX}
                        />)
                      : title}
                  </Link>
                </div>              
              </SwiperSlide>         
            );
          })}
          

        </Swiper>
        <div className={`${componentUniqClassName} carousel__btn-next`}></div>
        <div className={`${componentUniqClassName} carousel__btn-prev`}></div>
      </>
    );
  }

  return (
    <section
      // className={`partners ${componentUniqClassName}`}
      className='compilations__item compilations__item--partners carousel carousel--partners'
    >
      <div className='carousel__wrapper'>
        <h2 className='carousel__title'>{title}</h2>
        <div className='carousel__list'>
          {content}
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  title: PropTypes.string.isRequired,
  // partners: PropTypes
  //   .shape({
  //     ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  //     entities: PropTypes.shape({
  //       [PropTypes.string]: partner,
  //     }).isRequired,
  //   })
  //   .isRequired,
  partners: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  componentId: PropTypes.string.isRequired,
};

Partners.defaultProps = {
  // partners: { ids: [], entities: {}},
  partners: [],
};

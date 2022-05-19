/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { useGetCoursesQuery } from '../../store/api/courses-slice';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import styles from './offers-list.module.css';
import 'swiper/swiper.min.css';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
// import { fetchData } from '../../store/api/fetch-custom';
import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';

import DefaultTrumb from '../../img/default-trumb.png';
import ContentLoader from 'react-content-loader';
import { nanoid } from 'nanoid';

// const SLIDER_OFFSET_IN_PX = 0;
// const SLIDERS_SPACE_BETWEEN_IN_PX = 30;
// const SLIDES_PER_VIEW = 4;
// const IMG_WIDTH_IN_PX = 282;
// const IMG_HEIGHT_IN_PX = 282;

SwiperCore.use([Navigation, Virtual]);

function OffersList(props) {
  const {
    title,
    // offersIds,
    mainCourses,
    componentId,
    navigation,
    sliderWidthAuto,
    isMainCategoriesLoading
  } = props;

  const componentUniqClassName = `offers-list-${componentId}`;

  const reInitSwiper = (swiper) => setTimeout(() => swiper.update());
  // const { entities } = courses;

  const content = mainCourses.map((data, arrayIndex) => {
    const {
      slug,
      illustration,
      course_price: coursePrice,
      type_of_pay: typeOfPay,
      title: courseTitle,
      duration,
    } = data;
    const routePath = generateAppRoute(AppRoute.COURSES, decodeURI(slug));

    return (
      <SwiperSlide
        className={styles.SwiperSlide}
        key={slug}
        virtualIndex={arrayIndex}
      >
        <div className="block-courses__item">
          <div className="block-courses__img-wrapper">
            <img className="block-courses__img block-courses__img-hidden" src={illustration ? illustration : DefaultTrumb} alt={courseTitle}
              onLoad={(e)=>e.target.classList.remove("block-courses__img-hidden")}
            />
          </div>

          {(coursePrice || duration) ?
          <div className="block-courses__info">
            <p className="block-courses__price">
              <NumberFormat value={coursePrice} displayType={'text'} thousandSeparator=" " />
              <span className="block-courses__price-type">{typeOfPay ?? ' руб.'}</span>
            </p>
            <p className="block-courses__term">
              {duration}
            </p>
          </div> : ''}

          <p className="block-courses__title">{courseTitle}</p>
          <NavLink className="block-courses__link btn" to={routePath} >Подробнее</NavLink>
        </div>
      </SwiperSlide>
    );
  });


  return (
    <section className={classNames(`carousel carousel--full ${componentUniqClassName}`, {
      [styles.Carousel]: sliderWidthAuto,
    })}
    >
      <div className='carousel__wrapper'>
        <h2 className='carousel__title'>{title}</h2>
        <div className={`carousel__list ${styles.CarouselList}`}>
          <Swiper
            navigation={{
              nextEl: `.${componentUniqClassName} .carousel__btn-prev`,
              prevEl: `.${componentUniqClassName} .carousel__btn-next`,
            }}
            spaceBetween={3.1}
            freeMode
            grabCursor
            // loop={true}
            autoplay={{
              delay: 7000,
            }}
            onInit={reInitSwiper}
            slidesPerView='auto'
            // Reinitialise swiper right after first initialisation.
            // Otherwise virtual mode will ignore slidesPerView.
          >
            {isMainCategoriesLoading ? loader : content }
          </Swiper>
          <div className={navigation ? 'carousel__btn-next' : 'carousel__btn-next hidden'}></div>
          <div className={navigation ? 'carousel__btn-prev' : 'carousel__btn-prev hidden'}></div>
        </div>
      </div>
    </section>
  );
}

OffersList.propTypes = {
  title: PropTypes.string.isRequired,
  mainCourses: PropTypes.array.isRequired,
  componentId: PropTypes.string.isRequired,
  sliderWidthAuto: PropTypes.bool.isRequired,
  navigation: PropTypes.bool.isRequired,
};

export default OffersList;

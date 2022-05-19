/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { category } from '../../types/prop-types';
import CategoryListLoader from '../category-list-loader/category-list-loader';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';
import styles from './category-list.module.css';
import PopUpCategory from '../popup-category/popup-category';

const SLIDES_PER_VIEW = 6;
const IMG_WIDTH_IN_PX = 193;
const IMG_HEIGHT_IN_PX = 193;

SwiperCore.use([Virtual]);

// TODO Error state
export function CategoryList({ categories, isLoading }) {
  const dispatch = useDispatch();
  const selectedCategorySlugs = useSelector((state) => state.checked.categories);

  // if(!categories) return null;

  // const { ids, entities } = categories;
  // if (!ids.length && !isLoading) {return null;}

  let content = null;

  const [ visibleAllCategory, setVisibleAllCategory ] = useState(false);

  const reInitSwiper = (swiper) => setTimeout(() => swiper.update());

  if (isLoading) {
    content = <CategoryListLoader />;
  } else {
    content = (
      <Swiper
        slidesPerView='auto' //{SLIDES_PER_VIEW}
        // spaceBetween={22}
        // freeMode
        // virtual={{
        //   cache: true,
        //   addSlidesAfter: SLIDES_PER_VIEW,
        //   addSlidesBefore: SLIDES_PER_VIEW,
        // }}

        autoplay={{
          delay: 10000,
        }}
        // Reinitialise swiper right after first initialisation.
        // Otherwise virtual mode will ignore slidesPerView.
        onInit={reInitSwiper}
        breakpoints={{
          768: {
            spaceBetween: 22,
          },
          0: {
            spaceBetween: 10,
          },          
        }}        
        className=''
      >
        {categories.map((category, arrayIndex) => {
          const { id, slug, picture_svg: pictureSvg, picture_png: picturePng, title } = category;
          if (!selectedCategorySlugs.includes(slug)) return false;

          const routePath = generateAppRoute(AppRoute.CATEGORIES, decodeURI(slug));
          return (
            <SwiperSlide key={id} virtualIndex={arrayIndex} >
              <div key={id} className="block-filter__item--user-categories">
                {/*<input className="block-filter__input visually-hidden"
                type="checkbox" name="category" value={category.slug} />*/}
              {/* was <label htmlFor={category.slug}>*/}
                <NavLink to={routePath} className="block-filter__label block-filter__label--user-categories">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={picturePng ?? '/img/courses-page/category-placeholder-mobile.jpg'} />
                    <img className="block-filter__img" src={picturePng ?? '/img/courses-page/category-placeholder.jpg'} width="99px" height="99px" alt="" />
                  </picture>
                </NavLink>
                <span className="block-filter__name block-filter__name--user-categories">{title}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <>
      <section className='block-filter block-filter--user-categories'>
        <div className='block-filter__wrapper'>
          <div className='block-filter__header'>
            <h2 className='block-filter__title block-filter__title--user-categories'>Мои категории</h2>
            <div className='block-filter__all-link cursor-pointer' onClick={() => setVisibleAllCategory(true)}>
              Посмотреть все
            </div>
          </div>
          {content}
        </div>
      </section>
      {!isLoading &&
      <PopUpCategory
        visible={visibleAllCategory}
        setVisible={setVisibleAllCategory}
        categories={categories}
      />}
    </>
  );
}

CategoryList.propTypes = {
  // categories: PropTypes
  //   .shape({
  //     ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  //     entities: PropTypes.shape({
  //       [PropTypes.string]: category,
  //     }).isRequired,
  //   })
  //   .isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

CategoryList.defaultProps = {
  // categories: { ids: [], entities: {}},
  categories: [],  
};

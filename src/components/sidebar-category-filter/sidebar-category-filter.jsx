/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';
import { Link, NavLink } from 'react-router-dom';

import ContentLoader from 'react-content-loader';
import PopUpCategory from '../popup-category/popup-category';

import { useDispatch, useSelector } from 'react-redux';

export function SidebarCategoryFilter({blockTitle, categories, activeCategory, isLoading, isError}) {
  const dispatch = useDispatch();
  const selectedCategorySlugs = useSelector((state) => state.checked.categories);
  // console.log(selectedCategorySlugs);

  let content;
  let loader;
  const [ visibleAllCategory, setVisibleAllCategory ] = useState(false);
  // console.log(categories);
  // loader
  for(let count=0;  count < 6; count++) {
    loader = (
      <>
        {loader}
        <ContentLoader
          key={nanoid()}
          width={91}
          height={127}
          // viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="91" height="91" />
          <rect x="6" y="101" rx="4" ry="4" width="80" height="10" />
        </ContentLoader>
      </>
    );
  }

  if(!isLoading) {
    content = <>
      {categories.map((category, i) => {
        const { id, slug, picture_svg: pictureSvg, picture_png: picturePng, title } = category;
        const routePath = generateAppRoute(AppRoute.CATEGORIES, slug);
        const isCategoryChecked = selectedCategorySlugs.includes(slug);

        return ((isCategoryChecked || navigator.userAgent === 'ReactSnap') && //показываем SEO все категории
        // return (isCategoryChecked &&
          <li key={id} className="block-filter__item">
            <NavLink to={routePath} className={`block-filter__label${activeCategory === decodeURI(slug) ? " block-filter__label-checked" : ""}`} htmlFor={slug}>
              <picture>
                <source media="(max-width: 768px)" srcSet={picturePng ?? '/img/courses-page/category-placeholder-mobile.jpg'} />
                <img
                  className="block-filter__img block-filter__img-hidden"
                  src={picturePng ?? '/img/courses-page/category-placeholder.jpg'}
                  width="99px" height="99px" alt=""
                  onLoad={(e)=>{
                    e.target.classList.remove("block-filter__img-hidden")
                  }}/>
              </picture>
            </NavLink>
            <span className="block-filter__name">{title}</span>
          </li>)})}
    </>
  }

  return (
    <>
      <div className="block-filter">
        <h2 className="block-filter__title">{blockTitle}</h2>
        <ul className="block-filter__list">
          {isLoading ? loader : content}
        </ul>
        <button className="block-filter__all btn btn--courses" href="#" onClick={() => setVisibleAllCategory(true)}>Все категории</button>
      </div>
      {!isLoading &&
      <PopUpCategory
        visible={visibleAllCategory}
        setVisible={setVisibleAllCategory}
        categories={categories}
      />}
    </>
  );
}

SidebarCategoryFilter.propTypes = {
  blockTitle: PropTypes.string.isRequired,
  // categories: PropTypes
  //   .shape({
  //     ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  //     // entities: PropTypes.Array.isRequired,
  //     entities: PropTypes.shape({
  //       title: PropTypes.string,
  //       // [PropTypes.string]: title,
  //     }).isRequired,
  //   })
  //   .isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

SidebarCategoryFilter.defaultProps = {
  categories: [],
  isLoading: true,
};

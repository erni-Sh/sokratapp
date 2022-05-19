/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import NumberFormat from 'react-number-format';
// import { nanoid } from 'nanoid';
import ContentLoader from 'react-content-loader';

import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';

export function CoursesList({page, courses, isLoading, paged, setPaged, maxPaged}) { //page убрать?
  let loaderCats;
  // loader
  for(let count=0;  count < 6; count++) {
    loaderCats = (
      <>
        {loaderCats}
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
      </>
    );
  }

  let contentCats = '';
  if(courses) {
    for (const id in courses) {
      const {
        title,
        slug,
        duration,
        price,
        typecount,
        link,
        illustration,
        course_price: coursePrice,
        type_of_pay: typeOfPay,
      } = courses[id];

      const routePath = (page === 'practices')
        ? generateAppRoute(AppRoute.PRACTICE, slug)
        : generateAppRoute(AppRoute.COURSES, slug);

      contentCats = (
        <>
          <li key={id} className="block-courses__item">
            {/*<img className="instructor__courses-img" src={trumb} width={282} height={151} alt="" />*/}
            <div className="block-courses__img-wrapper">
              <img className="block-courses__img block-courses__img-hidden" src={illustration ? illustration : '/img/courses-page/course_default-trumb.png'} alt={title}
                onLoad={(e)=>e.target.classList.remove("block-courses__img-hidden")}
              />
            </div>
            {(coursePrice || duration) ?
            <div className="block-courses__info">
              <p className="block-courses__price">
                <NumberFormat value={coursePrice} displayType={'text'} thousandSeparator=" "/>
                {/*suffix={` ${typeOfPay}`} */}
                <span className="block-courses__price-type">{typeOfPay ?? ' руб.'}</span>
              </p>
              <p className="block-courses__term">
                {duration}
              </p>
            </div> : ''}
            <p className="block-courses__title">{title}</p>
            <NavLink className="block-courses__link btn" to={routePath}>Подробнее</NavLink>
          </li>
          {contentCats}
        </>
      );
    }
  }

  return (
    <>
      <ul className="block-courses">
        {contentCats}
        {isLoading && loaderCats}
      </ul>
      {paged <= maxPaged ?
      <button className="block-courses__btn btn" onClick={ ()=>setPaged(paged + 1) }>Показать еще</button> : ''}
    </>
  );
}

CoursesList.propTypes = {
  // title: PropTypes.string.isRequired,
  page: PropTypes.string,
  // courses: PropTypes
  //   .shape({
  //     ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  //     // entities: PropTypes.Array.isRequired,
  //     entities: PropTypes.shape({
  //       title: PropTypes.string,
  //       // [PropTypes.string]: title,
  //     }).isRequired,
  //   })
  //   .isRequired,
  isLoading: PropTypes.bool.isRequired,
  // componentId: PropTypes.string.isRequired,
};

CoursesList.defaultProps = {
  // courses: { ids: [], entities: {}},
};

// CoursesList.propTypes = {
//   categoryList: PropTypes.array.isRequired,
// };

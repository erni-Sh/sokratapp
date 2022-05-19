// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../../store/compare-course/compare-reducer.js';

export function PageHeader({headerPic, sloganImg, course}) {
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare);

  // вынести логику выше?
  let isCourseCompared = false;
  if(course) {
    isCourseCompared = compare.courses.filter((c) => c.id === course.id).length !== 0;
  }

  const addCompareCourse = (crs) => {
    isCourseCompared || dispatch(addCourseAction(crs));
  };

  return (
    <header className="page-header">
      <div className="page-header__plug-img">
        {Object.keys(course).length !== 0 &&
        <button className={`page-header__add-list ${isCourseCompared ? 'is-compared' : ''}`} onClick={() => addCompareCourse(course)} >
          <svg className='page-header__list-img'>
            <use xlinkHref='#compare-icon'></use>
          </svg>
        </button>}
        {course?.illustration_2 ?
          <img src={course.illustration_2} alt="" className="page-header__course-illustration" /> :
          <>
            {sloganImg &&
            <img src={sloganImg} alt="Начни учиться в Sokrart." className="page-header__logo" />}
            <img src={headerPic} alt="" className="page-header__course-img" />
          </>}
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  headerPic: PropTypes.string.isRequired,
  sloganImg: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
};

PageHeader.defaultProps = {
  course: {},
};


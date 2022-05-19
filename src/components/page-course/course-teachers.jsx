/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

export function CourseTeachers({teachers}) {

  let slidesContent;
  if(teachers) {
    for (let i = 0; i < teachers.length; i++) {
      slidesContent = (
        <>
          {slidesContent}
          <SwiperSlide>
            {i < (teachers.length - 1) &&
            <NavLink to={generateAppRoute(AppRoute.INSTRUCTOR, teachers[i].slug)} className="teacher_item_item">
              <div className="teacher__img-link">
                <img src={teachers[i].teacher_img ? teachers[i].teacher_img : '/img/course-page/teacher-photo.jpg'} alt={teachers[i].name} className="teacher__img" />
              </div>
              <div className="teacher__link">{teachers[i].name}</div>
            </NavLink>}
            {i++ < (teachers.length - 1) &&
            <NavLink to={generateAppRoute(AppRoute.INSTRUCTOR, teachers[i].slug)} className="teacher_item_item">
              <div className="teacher__img-link">
                <img src={teachers[i].teacher_img ? teachers[i].teacher_img : '/img/course-page/teacher-photo.jpg'} alt={teachers[i].name} className="teacher__img" />
              </div>
              <div className="teacher__link">{teachers[i].name}</div>
            </NavLink>}
            {i++ < (teachers.length - 1) &&
            <NavLink to={generateAppRoute(AppRoute.INSTRUCTOR, teachers[i].slug)} className="teacher_item_item">
              <div className="teacher__img-link">
                <img src={teachers[i].teacher_img ? teachers[i].teacher_img : '/img/course-page/teacher-photo.jpg'} alt={teachers[i].name} className="teacher__img" />
              </div>
              <div className="teacher__link">{teachers[i].name}</div>
            </NavLink>}
          </SwiperSlide>
        </>
      )
    }
  }

  return teachers ? 
    (<div className="course__teacher teacher">
      <h2 className="teacher__title">Преподаватели</h2>
      <Swiper
        slidesPerView='auto'
        spaceBetween={0}
        className="teacher__list"
        // pagination={{
        //   el: '.main-page-swiper__pagination',
        //   clickable: true,
        // }}
        // autoplay={{
        //   delay: 8000,
        // }}
      >
        {teachers.map((data) => {
          const {name, trumb, slug, id} = data;
          const routePath = generateAppRoute(AppRoute.INSTRUCTOR, slug);
          return (
            <SwiperSlide key={id} >
              <NavLink to={routePath} className="teacher__item">
                <div className="teacher__img-link">
                  <img src={data.teacher_img ? data.teacher_img : '/img/course-page/teacher-photo.jpg'} alt={name} className="teacher__img" />
                </div>
                <div className="teacher__link">{name}</div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="teacher__list__mobile swiper-list">
        <Swiper>
          {slidesContent}
        </Swiper>
      </div>

    </div>
  ) : '';
}

CourseTeachers.propTypes = {
  teachers: PropTypes.array.isRequired,
};

// CourseInfo.defaultProps = {
//   partners: { ids: [], entities: {}},
// };

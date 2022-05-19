/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import NumberFormat from 'react-number-format';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { nanoid } from 'nanoid';

export function CourseProgram({program}) {
  const reInitSwiper = (swiper) => setTimeout(() => swiper.update());
  let slidesContent;
  if(program) {
    for (let i = 0; i < program.length; i++) {
      slidesContent = (
        <>
          {slidesContent}
          <SwiperSlide key={nanoid()}>
            {i < (program.length - 1) &&
            <div className="course_item_item course__programm__item">
              <p className="course__lesson-title">{program[i].title}</p>
              {/*<p className="course__lesson-duration">{program[i].duration}</p>*/}
            </div>}
            {i++ < (program.length - 1) &&
            <div className="course_item_item course__programm__item">
              <p className="course__lesson-title">{program[i].title}</p>
              {/*<p className="course__lesson-duration">{program[i].duration}</p>*/}
            </div>}
            {i++ < (program.length - 1) &&
            <div className="course_item_item course__programm__item">
              <p className="course__lesson-title">{program[i].title}</p>
              {/*<p className="course__lesson-duration">{program[i].duration}</p>*/}
            </div>}
          </SwiperSlide>
        </>
      )
    }
  }
  
  return (
    <div className="course__programm">
      <p className="course__programm-title">Программа курса</p>
      <Swiper
        className="course__programm-list"
        slidesPerView='auto' //{2.5}
        spaceBetween={0}
        onInit={reInitSwiper}
        autoplay={{
          delay: 7000,
        }}
      >
        {slidesContent}
        {/*{program.map((data, i) => {
          const {title, duration, id} = data;
          return (
            <SwiperSlide key={id} className="course_item_item course__programm__item">
              <p className="course__lesson-title">{title}</p>
              <p className="course__lesson-duration"><NumberFormat value={duration} displayType={'text'} format="### ч." /></p>
            </SwiperSlide>
          );
        })}*/}
      </Swiper>
    </div>
  );
}

CourseProgram.propTypes = {
  program: PropTypes.array.isRequired,
};

// CourseInfo.defaultProps = {
//   partners: { ids: [], entities: {}},
// };

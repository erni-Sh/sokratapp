/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
// import NumberFormat from 'react-number-format';

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Autoplay } from 'swiper';

export function PracticeSkills({database}) {

  if (Object.keys(database).length === 0) { return false; }

  const practiceHardSkills = database.hard_skill;
  const practiceSoftSkills = database.soft_skills;

  let slidesHardSkills;
  for (let i = 0; i < practiceHardSkills.length; i++) {
    slidesHardSkills = (
      <>
        {slidesHardSkills}
        <SwiperSlide>
          {i < (practiceHardSkills.length) &&
            <div key={nanoid()} className="skills__item">{practiceHardSkills[i].name}</div>}
          {i++ < (practiceHardSkills.length - 1) &&
            <div key={nanoid()} className="skills__item">{practiceHardSkills[i].name}</div>}
          {i++ < (practiceHardSkills.length - 1) &&
            <div key={nanoid()} className="skills__item">{practiceHardSkills[i].name}</div>}
        </SwiperSlide>
      </>
    );
  }

  let slidesSoftSkills;
  for (let i = 0; i < practiceSoftSkills.length; i++) {
    slidesSoftSkills = (
      <>
        {slidesSoftSkills}
        <SwiperSlide>
          {i < (practiceSoftSkills.length) &&
            <div key={nanoid()} className="skills__item">{practiceSoftSkills[i].name}</div>}
          {i++ < (practiceSoftSkills.length - 1) &&
            <div key={nanoid()} className="skills__item">{practiceSoftSkills[i].name}</div>}
          {i++ < (practiceSoftSkills.length - 1) &&
            <div key={nanoid()} className="skills__item">{practiceSoftSkills[i].name}</div>}
        </SwiperSlide>
      </>
    );
  }

  return (
    <>
      <div className="practice__skills-hard skills">
        <p>Hard Skills</p>
        <Swiper
          className=""
          slidesPerView='auto'
          spaceBetween={0}
        >
          { slidesHardSkills }
        </Swiper>
      </div>
      <div className="practice__skills-soft skills">
        <p>Soft Skills</p>
        <Swiper
          className=""
          slidesPerView='auto'
          spaceBetween={0}
        >
          { slidesSoftSkills }
        </Swiper>
      </div>
    </>
  );
}

PracticeSkills.propTypes = {
  database: PropTypes.object.isRequired,
};

PracticeSkills.defaultProps = {
  database: {},
};

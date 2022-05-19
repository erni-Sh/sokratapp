// /* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { nanoid } from 'nanoid';

export function CourseReview({database}) {
  return (
    <div className="course__review review">
      <h2 className="review__title">
        Ваши отзывы
        <span className="review__stats"> ({database.length} отзыва)</span>
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView='auto'
        className="review__list"
      >
        {database.map((comment) => {
          const {
            comment_content: commentContent,
            comment_author: commentAuthor,
          } = comment;

          return (
            <SwiperSlide key={nanoid()}>
              <div className="review__item">
                <div className="review__info">
                  <h3 className="review__fullname">{commentAuthor}</h3>
                  <p className="review__prof">Инженер</p>
                </div>
                <p className="review__text">
                  {commentContent}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

CourseReview.propTypes = {
  database: PropTypes.array.isRequired,
};

/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchDropdown() {

  const [ isTabCourseActive, SetIsTabCourseActive ] = useState(true)

  const switchToCourses = () => {
    SetIsTabCourseActive(true);
  };

  const switchToVacancies = () => {
    SetIsTabCourseActive(false);
  };

  const content = (
    <div className="search_drop_down">
      <div className="search_drop_down__input-pading">
        <div className="search_drop_down__input">
          <input type="radio" name="search-checkbox" id="courses" className="search_drop_down__button-active" defaultChecked={isTabCourseActive} onChange={switchToCourses} /><label htmlFor="courses">Курсы</label>
          <input type="radio" name="search-checkbox" id="vacancies" className="search_drop_down__button-notactive" onChange={switchToVacancies} /><label htmlFor="vacancies">Вакансии</label>
        </div>
      </div>
      <div className={`search_drop_down__courses${isTabCourseActive ? '' : " hidden"}`} >
        <p className="search_drop_down__text">Курсы</p>
        <div className="search_drop_down__item-flex">
          <div>
            <p className="search_drop_down__item_text">Философия искусственного интеллекта</p>
            <div className="search_drop_down__info">
              <p className="search_drop_down__info_text">700 000 ₽,</p>
              <p className="search_drop_down__text-margin">23 месяца</p>
            </div>
          </div>
          <button>Подробнее</button>
        </div>
        <div className="search_drop_down__item-flex">
          <div>
            <p className="search_drop_down__item_text">Философия искусственного интеллекта</p>
            <div className="search_drop_down__info">
              <p className="search_drop_down__info_text">700 000 ₽,</p>
              <p className="search_drop_down__text-margin">23 месяца</p>
            </div>
          </div>
          <button>Подробнее</button>
        </div>
        <div className="search_drop_down__item-flex">
          <div>
            <p className="search_drop_down__item_text">Философия искусственного интеллекта</p>
            <div className="search_drop_down__info">
              <p className="search_drop_down__info_text">700 000 ₽,</p>
              <p className="search_drop_down__text-margin">23 месяца</p>
            </div>
          </div>
          <button>Подробнее</button>
        </div>
        <div className="search_drop_down__item-flex">
          <div>
            <p className="search_drop_down__item_text">Философия искусственного интеллекта</p>
            <div className="search_drop_down__info">
              <p className="search_drop_down__info_text">700 000 ₽,</p>
              <p className="search_drop_down__text-margin">23 месяца</p>
            </div>
          </div>
          <button>Подробнее</button>
        </div>
      </div>
      <div className={`search_drop_down__vacancies${isTabCourseActive ? " hidden" : ''}`} >
        <p className="search_drop_down__text">Вакансии</p>
        <div className="search_drop_down__not-found">Мы ничего не нашли, попробуйте другой запрос</div>
      </div>
      <a href="#" className="search_drop_down__look">
        <p>Смотреть все</p>
      </a>
    </div>
  );

  return content;
}

SearchDropdown.propTypes = {
  // isVisible: PropTypes.bool.isRequired,
  // setVisible: PropTypes.func.isRequired,
};

SearchDropdown.defaultProps = {
  // isVisible: false,
};

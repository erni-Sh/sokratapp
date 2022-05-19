/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import ContentLoader from 'react-content-loader';
import { SquareLoader, ButtonLoader } from '../loader-main/loader-main';
import EmptyFoto from '../../img/empty-certificate.svg';

export function InstructorInfo({database, isLoading}) {
  const isDatabaseEmpty = (Object.keys(database).length === 0);
  console.log(database);
  const content = (
    <div className="instructor__info">
      <div className="instructor__avatar">
        {isDatabaseEmpty ?
          <SquareLoader /> :
          <img src={database.teacher_img ? database.teacher_img : EmptyFoto} width="373px" height="373px" alt="" />}
        {/*'/img/course-page/teacher-photo.jpg'*/}
      </div>
      <div className="instructor__data">
        {isDatabaseEmpty ?
          <ContentLoader style={{width: '100%', height: '100%'}}>
            <rect x="0" y="0" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="84" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="168" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="252" rx="10" ry="10" width="900" height="64" />
          </ContentLoader>
          :
          <>
            <div className="instructor__inner">
              <h2 className="instructor__title">{database.title}</h2>
              <p className="instructor__text">{database.content}</p>
              <button className="instructor__more">показать еще</button>
            </div>
            <ul className="instructor__list">
              {database.teacher_position &&
                <li className="instructor__item">
                  <div className="instructor__link instructor__link--portfolio">
                    <p className="instructor__information">Текущая должность</p>
                    <p className="instructor__prompt instructor__prompt--active">{database.teacher_position}</p>
                  </div>
                </li>}
              {database.teacher_experience &&
                <li className="instructor__item">
                  <div className="instructor__link instructor__link--experience">
                    <p className="instructor__information">Опыт <span className="instructor__number instructor__number--center">{database.teacher_experience}</span></p>
                    <p className="instructor__prompt">Работал в должности</p>
                  </div>
                </li>}
              {database.teacher_raiting &&
                <li className="instructor__item">
                  <div className="instructor__link instructor__link--simple">
                    Рейтинг <span className="instructor__number">{database.teacher_raiting}</span>
                  </div>
                </li>}
            </ul>
            {(database.teacher_company || database.teacher_company_2 || database.teacher_company_3) &&
            <h2 className="instructor__title instructor__title--small">Компании</h2>}
            <ul className="instructor__company-list">
              {database.teacher_company &&
                <li key={nanoid()} className="instructor__company-item">
                  <a className="instructor__link instructor__link--company" href="#">
                    <p className="instructor__information">{database.teacher_company}</p>
                  </a>
                </li>}
              {database.teacher_company_2 &&
                <li key={nanoid()} className="instructor__company-item">
                  <a className="instructor__link instructor__link--company" href="#">
                    <p className="instructor__information">{database.teacher_company_2}</p>
                  </a>
                </li>}
              {database.teacher_company_3 &&
                <li key={nanoid()} className="instructor__company-item">
                  <a className="instructor__link instructor__link--company" href="#">
                    <p className="instructor__information">{database.teacher_company_3}</p>
                  </a>
                </li>}
            </ul>
          </>}
      </div>
      <div className='instructor__btn'>
        {isDatabaseEmpty ?
          <ButtonLoader /> :
          <a className=" btn" href="#">Оставить отзыв</a>}
      </div>
    </div>
  );

  return content;
}

InstructorInfo.propTypes = {
  database: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

InstructorInfo.defaultProps = {
  database: {},
};

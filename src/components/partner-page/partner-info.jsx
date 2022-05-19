// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
// import { nanoid } from 'nanoid';
import ContentLoader from 'react-content-loader';
import { SquareLoader, ButtonLoader } from '../loader-main/loader-main';

export function PartnerInfo({database, isLoading}) {

  const isDatabaseEmpty = (Object.keys(database).length === 0);

  const content = (
    <div className="instructor__info">
      <div className="instructor__avatar">
        {isDatabaseEmpty ?
          <SquareLoader /> :
          <img src={database.logo_png} width="373px" height="373px" alt="" />}
      </div>
      <div className="instructor__data">
        {isDatabaseEmpty ?
          <ContentLoader style={{width: '100%', height: '100%'}}>
            <rect x="0" y="0" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="84" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="168" rx="10" ry="10" width="900" height="64" />
            <rect x="0" y="252" rx="10" ry="10" width="900" height="64" />
          </ContentLoader> :
          <>
            <div className="instructor__inner">
              <h2 className="instructor__title">{database.title}</h2>
              <p className="instructor__text">{database.content}</p>
              <button className="instructor__more">показать еще</button>
            </div>

            <h3 className="partner__subtitle">Детали</h3>
            <ul className="partner__list">
              <li className="partner__item">
                <a className="partner__link" href="/">
                  Год основания
                  <span className="partner__number">
                    2012
                  </span>
                </a>
              </li>
              {/*<li className="partner__item">
                <a className="partner__link" href="#">
                  Всего курсов
                  <span className="partner__number">
                    1500
                  </span>
                </a>
              </li>*/}
              <li className="partner__item">
                <a className="partner__link" href="/">
                  Рейтинг
                  <span className="partner__number">
                    4.8
                  </span>
                </a>
              </li>
            </ul>
          </>}
      </div>
      <div className='instructor__btn'>
        {isDatabaseEmpty ?
          <ButtonLoader /> :
          <a className=" btn" href="/">Оставить отзыв</a>}
      </div>
    </div>
  );

  return content;
}

PartnerInfo.propTypes = {
  database: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

PartnerInfo.defaultProps = {
  database: {},
};

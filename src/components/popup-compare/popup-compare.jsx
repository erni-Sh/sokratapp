// /* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

import { useDispatch, useSelector } from 'react-redux';
import { getCourseAction } from '../../store/compare-course/compare-reducer.js';
// import IconDelete from '../../img/icons/icon-delete.svg';

export default function PopUpCompare({visible, setVisible}) {

  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compare);
  const isCompare = compare.courses.length > 0;

  const getCompareCourse = (crs) => {
    dispatch(getCourseAction(crs));
  };

  const html = document.getElementsByTagName('html')[0];
  visible && html.classList.add('fixed');

  const closePopUp = () => {setVisible(false); html.classList.remove('fixed'); };

  return (
    <section className={visible ? 'popup-compare' : 'popup-compare popup-compare--hidden'} onClick={closePopUp}>
      <div className="popup-compare__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-compare__title">{isCompare ? 'Сравните курсы' : 'Добавьте курсы для сравнения'}</h2>
        <button className="popup-compare__close" onClick={closePopUp}>
          <NavLink to={AppRoute.COURSES}>Добавить курс</NavLink>
        </button>

        {isCompare &&
        <ul className="popup-compare__list">
          <li className="popup-compare__item popup-compare__item--titles">
            <p className="popup-compare__title-name">Название курса</p>
            <p className="popup-compare__title-name">Продолжительность</p>
            <p className="popup-compare__title-name">Цена</p>
          </li>
          {compare.courses.map((course) => {
            const {title, duration, price, id} = course;
            return (
              <li className="popup-compare__item" key={id} >
                <p className="popup-compare__name">{title}</p>
                <p className="popup-compare__duration">{duration}</p>
                <p className="popup-compare__price">{price}</p>
                <button className="popup-compare__btn btn">Купить курс</button>
                <button className="popup-compare__del" onClick={() => getCompareCourse(course)} >
                  {/*<img src={IconDelete} />*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={56} height={56} viewBox="0 0 56 56">
                    <defs>
                      <filter id="Прямоугольник_3481" x={0} y={0} width={56} height={56} filterUnits="userSpaceOnUse">
                        <feOffset dy={3} input="SourceAlpha" />
                        <feGaussianBlur stdDeviation={2} result="blur" />
                        <feFlood floodOpacity="0.161" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g id="Сгруппировать_9137" data-name="Сгруппировать 9137" transform="translate(-1477 -409)">
                      <g transform="matrix(1, 0, 0, 1, 1477, 409)" filter="url(#Прямоугольник_3481)">
                        <rect id="Прямоугольник_3481-2" data-name="Прямоугольник 3481" width={44} height={44} rx={10} transform="translate(6 3)" />
                      </g>
                      <g id="delete" transform="translate(1496.229 422.5)">
                        <path id="Контур_470" data-name="Контур 470" d="M74.1,2.091A1.178,1.178,0,0,1,75.324.9h5.018a1.178,1.178,0,0,1,1.221,1.187v1.3h.9v-1.3A2.083,2.083,0,0,0,80.342,0H75.324A2.083,2.083,0,0,0,73.2,2.091v1.3h.9Zm0,0" transform="translate(-69.063)" fill="#fff" />
                        <path id="Контур_471" data-name="Контур 471" d="M30.03,139.993H40.722a1.925,1.925,0,0,0,1.831-2.034V124H28.2v13.958a1.925,1.925,0,0,0,1.831,2.034Zm8.228-13.834a.452.452,0,0,1,.9,0v10.681a.452.452,0,0,1-.9,0Zm-3.334,0a.452.452,0,0,1,.9,0v10.681a.452.452,0,0,1-.9,0Zm-3.334,0a.452.452,0,0,1,.9,0v10.681a.452.452,0,0,1-.9,0Zm0,0" transform="translate(-26.605 -116.993)" fill="#fff" />
                        <path id="Контур_472" data-name="Контур 472" d="M1.13,70.26h15.28a1.13,1.13,0,1,0,0-2.26H1.13a1.13,1.13,0,1,0,0,2.26Zm0,0" transform="translate(0 -64.157)" fill="#fff" />
                      </g>
                    </g>
                  </svg>
                </button>
              </li>);
          })}
        </ul>}
      </div>
    </section>
  );
}

PopUpCompare.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

PopUpCompare.defaultProps = {
  visible: false,
};

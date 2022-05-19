/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import PopUpDescr from '../popup-descr/popup-descr';


export function CourseInfo({database, isLoading}) {
  const [fullInfoVisible, SetFullInfoVisible] = useState();
  let html;
  if(database) {

    const {
      title,
      price,
      type_of_pay: typeOfPay,
      excerpt,
      content,
    } = database;

    html = (
      <>
        <div className="course__info">
          <h1 className="course__title">{title}</h1>
          {price &&
          <p className="course__price">Стоимость обучения <NumberFormat value={price} displayType={'text'} thousandSeparator=" " suffix={typeOfPay} /></p>}
          <div className="course__description" dangerouslySetInnerHTML={{__html: excerpt}} />
          {content &&
          <button className="course__button-more" onClick={ ()=>{ SetFullInfoVisible(true); }}>
            Подробнее
          </button>}
        </div>
        {content &&
        <PopUpDescr
          visible={fullInfoVisible}
          setVisible={SetFullInfoVisible}
          title={title}
        >
          <div dangerouslySetInnerHTML={{__html: content}} />
          {/*<div>{content}</div>*/}
        </PopUpDescr>}
      </>
    );
  }

  return html;
}

CourseInfo.propTypes = {
  database: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

CourseInfo.defaultProps = {
  // partners: { ids: [], entities: {}},
  database: {},
};

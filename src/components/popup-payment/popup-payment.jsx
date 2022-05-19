/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import PopUpConfidentiality from '../popup-confidentiality/popup-confidentiality';

export function ButtonPayment({page, courseData, isLoading}) {
  const [paymentVisible, setPaymentVisible] = useState(false);

  return (!isLoading &&
    <>
      <div className="course__payment">
        {page === 'practice'
          ?
          <div className="course__payment-btn" onClick={() => setPaymentVisible(true)}>Хочу устроиться</div>
          :
          <>
            {/*упростить логику, сделать только два кейса*/}
            {courseData.sell != null && courseData.sell[0] === 'Наша платежка'
              ?
              <div className="course__payment-btn" onClick={() => setPaymentVisible(true)}>Оплатить обучение</div> 
              :
              <>
                {courseData.['referral-link'] &&
                <a href="https://sokratinvest.ru/supportsokrat" className="course__payment-btn" target="_blank" rel="noreferrer">
                {/*{courseData.['referral-link']}*/}
                  Бесплатная консультация
                {/*Узнай детали*/}
                </a>}
              </>
            }
          </>
        }
      </div>

      {courseData &&
        <PopUpPayment
          visible={paymentVisible}
          setVisible={setPaymentVisible}
          courseData={courseData}
          page={page}
        />}
    </>
  );
}

export function PopUpPayment({visible, setVisible, courseData, page}) {
  const {id, title, partner} = courseData;

  const html = document.getElementsByTagName('html')[0];
  visible && html.classList.add('fixed');

  return (
    <section className={visible ? 'popup-payment' : 'popup-payment popup-payment--hidden'} onClick={()=>{setVisible(false); html.classList.remove('fixed');}} >
      <form className="popup-payment__form" action='' onClick={(e)=> e.stopPropagation()} >
        <h2 className="popup-payment__title">
          {page==='practice' ? 'Отклик на вакансию' : 'Оплата курса'}
        </h2>
        <button className="popup-payment__close" type="button" onClick={()=>{setVisible(false); html.classList.remove('fixed');}} />
        <fieldset className="popup-payment__fieldset fieldset">
          <legend className="fieldset__title">Контактные данные</legend>
          <ul className="fielset__input-list">
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="last-name">Ваша фамилия</label>
              <input className="input__field" type="text" id="last-name" placeholder="Введите вашу фамилию" />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="first-name">Введите ваше имя</label>
              <input className="input__field" type="text" id="first-name" placeholder="Ваше имя" />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="patronomic">Введите ваше отчество</label>
              <input className="input__field" type="text" id="patronomic" placeholder="Ваше отчество" />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="phone">Ваш номер телефона</label>
              <input className="input__field" type="number" id="phone" placeholder="+7 (920) 123 45 67" />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="email">Ваш email</label>
              <input className="input__field" type="email" id="email" placeholder="Введите вашу почту" />
            </li>
          </ul>
        </fieldset>
        <fieldset className="popup-payment__fieldset fieldset">
          <legend className="fieldset__title">
            {page==='practice' ? 'Данные о вакансии' : 'Данные о курсе'}
          </legend>
          <ul className="fielset__input-list">
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="course-id">
                {page==='practice' ? 'id вакансии' : 'id курса'}
              </label>
              <input className="input__field" type="number" id="course-id" value={id} readOnly />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="course-name">
                {page==='practice' ? 'Название вакансии' : 'Название курса'}
              </label>
              <input className="input__field" type="text" id="course-name" value={title} readOnly />
            </li>
            <li className="fieldset__input-item input">
              <label className="input__label" htmlFor="partner">
                {page==='practice' ? 'Партнер вакансии' : 'Партнер курса'}
              </label>
              <input className="input__field" type="text" id="partner" value={partner[0]?.title} readOnly />
              {/* а если несколько партнеров?*/}
            </li>
          </ul>
        </fieldset>
        {page==='practice' ||
          <fieldset className="popup-payment__fieldset fieldset fieldset--pay">
            <legend className="fieldset__title">Способ оплаты</legend>
            <ul className="fielset__input-list">
              <li className="fieldset__input-item input input--pay">
                <input className="input__field" type="text" defaultValue="Оплата с помощью карты" readOnly />
              </li>
            </ul>
          </fieldset>}
        <p className="popup-payment__info">
          Нажимая {page==='practice' ? 'откликнуться' : 'оплатить'}, вы соглашаетесь
          с нашей <a className="popup-payment__confidentiality" id="confidentiality" href="#">Политикой конфиденциальности</a>
        </p>
        <button className="popup-payment__button-pay btn btn--disabled" type="submit" id="accept" disabled>
          {page==='practice' ?
            <div>откликнуться</div> :
            <div>Оплатить <b className="popup-payment__price">140 000 ₽</b></div>}
        </button>
      </form>
    </section>
  );
}

ButtonPayment.propTypes = {
  page: PropTypes.string,
  courseData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

PopUpPayment.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  courseData: PropTypes.object.isRequired,
  page: PropTypes.string,
};

// CourseInfo.defaultProps = {
//   partners: { ids: [], entities: {}},
// };

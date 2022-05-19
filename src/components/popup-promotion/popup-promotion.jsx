/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { copyCodeToClipboard } from '../../utils/copyToClipboard';

export default function PopUpPromotion({visible, setVisible, contentPromo}) {
  // console.log(contentPromo);
  if(Object.keys(contentPromo).length === 0) {return false; }

  const html = document.getElementsByTagName('html')[0];
  visible && html.classList.add('fixed');

  const closePopUpPromotion = () => {
    setVisible(false);
    html.classList.remove('fixed');
  };

  const [ alert, setAlert ] = useState(false);

  const copyCodeToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    
    setAlert(true);
    setTimeout(() => setAlert(false), 3000)
  };

  const {
    picture_promo: picturePromo,
    title,
    content,
    sokrat_learn_partner: learnPartner,
    coupon_promo: couponPromo,
    link_promolink_promo: linkPromo,
  } = contentPromo;

  const {
    learn_partner_png: partnerPng,
    post_title: partnerTitle,
  } = learnPartner;

  const renderHtml = (
    <>
      <section className={visible ? 'popup-promotion' : 'popup-promotion popup-promotion--hidden'} onClick={closePopUpPromotion} >
        <div className="popup-promotion__block" onClick={(e) => e.stopPropagation()}>
          <button className="popup-promotion__close" type="button" onClick={closePopUpPromotion} />
          {visible &&
            <>
              <img className="popup-promotion__img" src={picturePromo} alt="" />
              <div className="popup-promotion__info">
                <p className="popup-promotion__slogan">{title}</p>
                <p className="popup-promotion__text">{content}</p>
                {learnPartner.length ?
                  <>
                    <p className="popup-promotion__title">Партнер акции</p>
                    <div className="popup-promotion__partner">
                      <div className="popup-promotion__partner__img">
                        <img src={partnerPng} alt="" />
                      </div>
                      {partnerTitle}
                    </div>
                  </> : ''}
                {couponPromo &&
                  <>
                    <p className="popup-promotion__title">Купон</p>
                    <div className="popup-promotion__code">
                      {couponPromo}
                      <div className="popup-promotion__code-copy" onClick={()=>copyCodeToClipboard(couponPromo)} />
                    </div>
                  </>}
                {linkPromo &&
                  <a className="popup-promotion__button btn" href={linkPromo} target="_blank" rel="noopener noreferrer">Перейти</a>}
              </div>
            </>}
        </div>
        <div className={`popup-promotion__copied ${alert ? '' : "popup-promotion__copied-hidden"}`}>
          Купон скопирован
        </div>
      </section>

    </>
  );

  return renderHtml;
}

PopUpPromotion.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  contentPromo: PropTypes.object.isRequired,
};

PopUpPromotion.defaultProps = {
  visible: false,
  contentPromo: {},
};

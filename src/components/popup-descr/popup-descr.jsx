// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';

export default function PopUpDescr({visible, setVisible, title, children}) {
  const html = document.getElementsByTagName('html')[0];
  visible && html.classList.add('fixed');

  const closePopUpDescr = () => {
    setVisible(false);
    html.classList.remove('fixed');
  };

  return (
    <section className={visible ? 'popup-confidentiality' : 'popup-confidentiality popup-confidentiality--hidden'} onClick={closePopUpDescr}>
      <div className="popup-confidentiality__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-confidentiality__title">{title}</h2>
        <button className="popup-confidentiality__close" type="button" onClick={closePopUpDescr} />
        <div className="popup-confidentiality__text">
          {children}
        </div>
      </div>
    </section>
  );
}

PopUpDescr.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

PopUpDescr.defaultProps = {
  visible: false,
  title: '',
  // children: , // разобратсья
};

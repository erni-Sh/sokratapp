import React from 'react';
import PropTypes from 'prop-types';
import styles from './message.module.css';

const ERROR_MESSAGE = 'Ошибка :-(';

function Message(props) {
  const {
    message,
    onButtonClick,
    isButtonVisible,
  } = props;

  return (
    <section className={styles.message}>
      <h2 className="visually-hidden">Уведомление об ошибке</h2>
      <p className={styles.messageText}>{message}</p>
      {isButtonVisible && (
        <button
          className={`btn btn--pink ${styles.messageButton}`}
          type="button"
          onClick={onButtonClick}
        >
          Попробовать ещё раз
        </button>
      )}
    </section>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isButtonVisible: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  message: ERROR_MESSAGE,
  onButtonClick: () => {},
  isButtonVisible: true,
};

export default Message;

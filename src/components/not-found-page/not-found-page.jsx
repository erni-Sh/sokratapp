/* eslint-disable*/
import React from 'react';
// import Message from '../message/message';
import PageLayout from '../page-layout/page-layout';
import styles from './not-found-page.module.css';
// import styles from '../message/message.module.css';
import { Link, NavLink } from 'react-router-dom';

const MESSAGE = 'Данная страница не существует!';

function NotFoundPage() {
  return (
    <PageLayout>
      <section className={styles.message}>
        <h1 className={styles.messageText}>{MESSAGE}</h1>

        <NavLink
          to="/"
          className={`btn btn--pink ${styles.messageButton}`}
        >
          На главную
        </NavLink>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;

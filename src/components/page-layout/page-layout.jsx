import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;

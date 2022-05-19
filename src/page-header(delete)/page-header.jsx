import React from 'react';
import pageHeaderLogo from '../img/page-header-logo.png';
import pageCourseImage from '../img/page-course-img.svg';

export function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <img src={pageHeaderLogo} alt="Начни учиться в Sokrart." className="page-header__logo" />
        <img src={pageCourseImage} alt="" className="page-header__course-img" />
      </div>
    </header>
  );
}

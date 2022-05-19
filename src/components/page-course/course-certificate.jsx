/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import EmptyCertificate from '../../img/empty-certificate.svg';

export function CourseCertificate({certificate}) {
  // const {name, trumb, link} = certificate;
  return (
    <div className="course__certificate">
      <p className="sidebar__title course__sidebar-title--big">Ваш сертификат</p>
      <a href='' className="course__certificate__img-link">
        <img src={certificate ? certificate : EmptyCertificate} />
        {/*<img src={trumb} alt={name} className="course__certificate-img" />*/}
      </a>
    </div>
  );
}

CourseCertificate.propTypes = {
  certificate: PropTypes.string,
};

// CourseInfo.defaultProps = {
//   partners: { ids: [], entities: {}},
// };

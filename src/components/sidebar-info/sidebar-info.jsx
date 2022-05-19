// /* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
// import { useLocation } from 'react-router-dom';

import { SquareLoader, DescrLoader } from '../loader-main/loader-main';

import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { generateAppRoute } from '../../utils/util';
import { nanoid } from 'nanoid';

export function SidebarInfo({page, database, isLoading}) {

  const isDatabase = Object.keys(database).length !== 0;

  return (
    <div className="sidebar">
      {isLoading || database.partner?.length ?
        <p className="sidebar__title">Партнер</p> : ''}
      {database.partner ?
        database.partner.map((partner)=>{
          const routePath = generateAppRoute(AppRoute.PARTNER, partner.slug);
          return (
            <div className="sidebar__partner" key={nanoid()} >
              <NavLink to={routePath} className="sidebar__partner-img-link">
                <img src={partner.logo_png} alt={partner.title} className="sidebar__partner-img" />
              </NavLink>
              <p className="sidebar__partner-title">
                <NavLink to={routePath} className="sidebar__partner-link">
                  {partner.title}
                </NavLink>
              </p>
            </div>);
        }) :
        <div className="sidebar__partner">
          <div className ="sidebar__partner-img-link">
            <SquareLoader />
          </div>
          <div className="sidebar__partner-title">
            <DescrLoader />
          </div>
        </div>}

      <div className="sidebar__details">
        <p className="sidebar__title">{page==='practice' ? 'Детали стажировки' : 'Детали'}</p>
        <ul className="sidebar__details-list">
          <li className="sidebar__details-item sidebar__details-item--duration">
            <p className="sidebar__details-title">{page==='practice' ? 'Продолжительность' : 'Срок обучения'}</p>
            <p className="sidebar__details-info">{isDatabase ? database.duration : <DescrLoader />}</p>
          </li>
          <li className="sidebar__details-item sidebar__details-item--format">
            <p className="sidebar__details-title">{page==='practice' ? 'Тип стажировки' : 'Формат обучения'}</p>
            <p className="sidebar__details-info">{isDatabase ? database.format : <DescrLoader />}</p>
            {/*отдаёт education-format*/}
          </li>
          {page==='practice' &&
          <li className="sidebar__details-item sidebar__details-item--invoice">
            <p className="sidebar__details-title">{page==='practice' ? 'График' : ''}</p>
            <p className="sidebar__details-info">{isDatabase ? database.job_schedule : <DescrLoader />}</p>
          </li>}
        </ul>
      </div>
    </div>
  );
}

SidebarInfo.propTypes = {
  page: PropTypes.string,
  database: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

SidebarInfo.defaultProps = {
  // partners: { ids: [], entities: {}},
  database: {},
};

/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import useDocumentTitle from '../../utils/useDocumentTitle';
import PageLayout from '../page-layout/page-layout';
import PropTypes from 'prop-types';
import { PartnerInfo } from './partner-info';
// import { InstructorCourses } from './instructor-courses';
import { useParams } from 'react-router';
// exp
import { useGetInstructorQuery } from '../../store/api/instructor-slice';
import { useGetPartnerQuery } from '../../store/api/partners-slice';

import {SidebarCategoryFilter} from '../sidebar-category-filter/sidebar-category-filter';
import {CoursesList} from '../courses-list/courses-list';

import { useGetCategoriesQuery } from '../../store/api/categories-slice';

import { fetchData } from '../../store/api/fetch-custom';
import { wordPressApiResourcePath } from '../../const.jsx';

// const instructorData = {
//   name: 'Сергей Кокарев',
//   trumb: '/img/instructor-page/teacher.jpg',
//   descr: 'Образовательный портал, который помогает начать карьеру в digital с нуля или получить новые навыки для её развития',
//   position: 'Партнёр агентства «Апрель» и руководитель направления стратегии и креатива',
//   experience: '10 лет',
//   rating: '4.8',
//   companies: ['Агентство «Апрель»', 'Агентство «Апрель»', 'Агентство «Апрель»', 'Агентство «Апрель»'],
// };

const InstructorCategory = [
  {
    name: 'Блокчейн',
    slug: 'blockchain',
    trumb: '/img/courses-page/category-placeholder.jpg',
  },
  {
    name: 'Блокчейн',
    slug: 'blockchain',
    trumb: '/img/courses-page/category-placeholder.jpg',
  },
  {
    name: 'Блокчейн',
    slug: 'blockchain',
    trumb: '/img/courses-page/category-placeholder.jpg',
  },
];

const InstrustorCourses = [
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
  {
    title: 'Философия искусственного интеллекта',
    price: 700000,
    duration: '23 месяца',
    link: '',
    trumb: '/img/courses-page/slider-placeholder.jpg',
    slug: '1',
  },
];

export default function PartnerPage({title}) {
  const { partnerSlug } = useParams();

  const {
    data: partner,
    isFetching: isPartnerLoading,
    // isError: isPartnerError,
    // refetch: refetchPartner,
  } = useGetPartnerQuery(partnerSlug);
  // console.log(partner);

  const {
    data: categories,
    isFetching: isCategoriesLoading,
    isError: isCoursesError,
    // refetch: refetchCourses,
  } = useGetCategoriesQuery();

  const courses = {
    entities: [
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
      },
    ]      
  }
  const isCoursesLoading = false;

  useDocumentTitle(title, partner?.title);

  const content = (

    <section className="main__instructor instructor container">
      {/*<MainSlider campaigns={campaigns} isLoading='' />*/}
      <PartnerInfo
        database={partner}
        isLoading={isPartnerLoading}
      />
      <div className="instructor__courses">
        <div className="instructor__block-filter">
          <SidebarCategoryFilter
            blockTitle = 'Категории'
            categories= {categories}
            isLoading = {isCategoriesLoading}
            isError={isCoursesError}
          />
        </div>

        <div className='instructor__block-courses'>
          <CoursesList
            courses={courses}
            isLoading={isCoursesLoading}
          />
        </div>
      </div>
    </section>
  );

  return (
    <PageLayout>
      {content}
    </PageLayout>
  );
}

PartnerPage.propTypes = {
  title: PropTypes.string.isRequired,
};
/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import useDocumentTitle from '../../utils/useDocumentTitle';
import PageLayout from '../page-layout/page-layout';
import PropTypes from 'prop-types';
import { InstructorInfo } from './instructor-info';
// import { InstructorCourses } from './instructor-courses';
import { useParams } from 'react-router';
// exp
import { useGetInstructorQuery } from '../../store/api/instructor-slice';


import {SidebarCategoryFilter} from '../sidebar-category-filter/sidebar-category-filter';
import {CoursesList} from '../courses-list/courses-list';

import { useGetCategoriesQuery } from '../../store/api/categories-slice';
// import { useGetCoursesQuery } from '../../store/api/courses-slice';

import { fetchData } from '../../store/api/fetch-custom';
import { wordPressApiResourcePath } from '../../const.jsx';

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


export default function InstructorPage({title}) {
  const { instructorSlug } = useParams();

  const {
    data: instructor,
    isFetching: isInstructorLoading,
    isError: isInstructorError,
    refetch: refetchInstructor,
  } = useGetInstructorQuery(instructorSlug);
  // console.log(instructor);

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

  useDocumentTitle(title, instructor?.title);

  const content = (
    <section className="main__instructor instructor container">
      {/*<MainSlider campaigns={campaigns} isLoading='' />*/}
      <InstructorInfo
        database={instructor}
        isLoading={isInstructorLoading}
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

InstructorPage.propTypes = {
  title: PropTypes.string.isRequired,
};

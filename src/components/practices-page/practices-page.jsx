/* eslint-disable */
import React from 'react';
import useDocumentTitle from '../../utils/useDocumentTitle';
import PageLayout from '../page-layout/page-layout';
import PropTypes from 'prop-types';

import { PageHeader } from '../page-header/page-header';
import PageHeaderPic from '../../img/page-header/page-header-1.png';
import SloganImg from '../../img/page-header/slogan-2.svg';

import {SidebarCategoryFilter} from '../sidebar-category-filter/sidebar-category-filter';
import {CoursesList} from '../courses-list/courses-list';

import { useGetCategoriesQuery } from '../../store/api/categories-slice';
import { useGetCoursesQuery } from '../../store/api/courses-slice';

export default function PracticesPage({title}) {
  useDocumentTitle(title);

  const {
    data: categories,
    isFetching: isCategoriesLoading,
    isError: isCoursesError,
    // refetch: refetchCourses,
  } = useGetCategoriesQuery();

  // const {
  //   data: courses,
  //   isFetching: isCoursesLoading,
  //   // isError: isCoursesError,
  //   // refetch: refetchCourses,
  // } = useGetCoursesQuery();
  const courses = {
    entities: [
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
      {
        title: 'Философия искусственного интеллекта',
        price: '700000',
        'typecount': 'руб',
        duration: '6 недель',
        link: '',
        slug: 'job1',
      },
    ]      
  }
  const isCoursesLoading = false;
  // console.log(courses);
  // if(courses) CoursesListData = courses;
  // const {endpoints} = courses;

  // fetch('https://sokratapp.ru/wp-json/wp/v2/categories')
  //   .then((response) => response.json())
  //   .then((posts) => {

  //     CoursesListData = posts;
  //     console.log(CoursesListData);
  //   });

  const content = (
    <>
      <PageHeader headerPic={ PageHeaderPic } sloganImg={ SloganImg } />
      <div className="list-layout container">
        <div className="list-layout__block-filter page-practices" aria-label="Выбор категорий курсов">
          <SidebarCategoryFilter
            blockTitle = 'Категории'
            categories= {categories}
            isLoading = {isCategoriesLoading}
            isError={isCoursesError}
          />
        </div>

        <div className="list-layout__block-list block-list">
          <form className="block-list__form" action="">
            <input className="block-list__search" type="search" placeholder="Поиск по курсам" />
            {/*<div className="course-all__button-box">
              <button className="course-all__btn-options" type="button">
                <img src="img/favicon/settings.svg" alt="" />
              </button>
              <button className="course-all__btn-frontend" type="button">Frontend</button>
              <button className="course-all__btn-backend" type="button">Backend</button>
            </div>*/}
          </form>

          <div className='page-practices'>
            <CoursesList
              page='practices'
              courses={courses}
              isLoading={isCoursesLoading}
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <PageLayout>
      {content}
    </PageLayout>
  );
}

PracticesPage.propTypes = {
  title: PropTypes.string.isRequired,
};


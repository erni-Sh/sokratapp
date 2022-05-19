/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoriesAction } from '../../store/checked-categories/checked-categories.js';

import useDocumentTitle from '../../utils/useDocumentTitle';
import DocumentMeta from 'react-document-meta';

import PageLayout from '../page-layout/page-layout';
import PropTypes from 'prop-types';

import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

import { AppRoute } from '../../const';
import { generateAppRoute, scrollPage } from '../../utils/util';

import { PageHeader } from '../page-header/page-header';
import PageHeaderPic from '../../img/page-header/page-header-2.svg';
import SloganImg from '../../img/page-header/slogan-2.svg';

import {SidebarCategoryFilter} from '../sidebar-category-filter/sidebar-category-filter';
import {CoursesList} from '../courses-list/courses-list';

import { useGetCategoriesQuery } from '../../store/api/categories-slice';
import { useGetCoursesQuery } from '../../store/api/courses-slice';

import Message from '../message/message';

const POSTS_PER_PAGE = navigator.userAgent === 'ReactSnap' ? -1 : 6; //SEO отдаём все курсы


export default function PageCourses({title}) {
  let { categorySlug } = useParams();
  let encodedCategorySlug = encodeURI(categorySlug).toLowerCase();

  // оформляем страницу - перейти на DocumentMeta
  // scrollPage();
  useDocumentTitle(title, categorySlug);

  // ----------------------- КАТЕГОРИИ  -------------------
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedCategorySlugs = useSelector((state) => state.checked.categories);
  
  const {
    data: categories,
    isFetching: isCategoriesLoading,
    isError: isCategoriesError,
    refetch: refetchCategories,
  } = useGetCategoriesQuery();
  // console.log(categories);

  const selectFirstCategory = () => {
    const routePath = generateAppRoute(AppRoute.CATEGORIES, decodeURI(selectedCategorySlugs[0]));
    history.push(routePath);
  };

  // 1. если ничего не было выбрано выбираем первую
  if(!categorySlug) {
    encodedCategorySlug = selectedCategorySlugs[0];
    categorySlug = decodeURI(encodedCategorySlug);
  }

  useEffect(()=>{
    if(!categories) return false; //первый рендер
    // 2. если опечатка - переходим на первую
    const isTypo = !categories.filter(cat => cat.slug.includes(encodedCategorySlug)).length;
    if(isTypo) {
      selectFirstCategory();
      
    } else {
      // 3.если зашли на категорию, которая не выбрана - переключаемся только на нее
      if(!selectedCategorySlugs.includes(encodedCategorySlug)) {
        dispatch(addCategoriesAction([encodedCategorySlug]));
      }
    }
  }, [isCategoriesLoading])

  useEffect(()=>{
    if(!categories) return false; //защита от поспещных выводов)

    // 4. если категории изменились, и в них нет активной, выбираем первую и переключаемся
    if(!selectedCategorySlugs.includes(encodedCategorySlug)) {
      selectFirstCategory();
    };
    // setIsFirstRender(false);
  }, [selectedCategorySlugs])

  // в это месте должно быть всё уже определено
  // console.log(categorySlug);
  
  // ----------------------- КУРСЫ -------------------

  const [ paged, setPaged ] = useState(1);
  const [ courses, setCourses ] = useState([]);
  const [ maxPaged, setMaxPaged ] = useState(1);
  // подгружаем курсы
  const {
    data: coursesPage,
    isFetching: isCoursesLoading,
    isError: isCoursesError,
    refetch: refetchCourses,
  } = useGetCoursesQuery(`?posts_per_page=${POSTS_PER_PAGE}&paged=${paged}&category=${categorySlug}`);
  // console.log(coursesPage);

  // при выборе другой категории
  useEffect(() => {
    setPaged(1);
    setCourses([]);
  }, [categorySlug]);

  // обновляем массив курсов
  useEffect(()=>{
    if(coursesPage && !isCoursesLoading) {
      if(paged === 1) {
        setCourses([...coursesPage[0]?.courses]);
        setMaxPaged(coursesPage[0]?.total / POSTS_PER_PAGE | 0);
      } else {
        setCourses([...coursesPage[0]?.courses, ...courses]);
      }
    };
  }, [isCoursesLoading, categorySlug, paged]);

  // обновить всё
  const refetchAllEndpoints = useCallback(() => {
    refetchCourses();
    refetchCategories();
  }, [
    refetchCourses,
    refetchCategories,
  ]);

  const isFetchingError = isCoursesError || isCategoriesError;

  let content;

  if(isFetchingError) {
    content = <Message onButtonClick={refetchAllEndpoints} />;

  } else {
    content = (
      <div className="list-layout container">
        <div className="list-layout__block-filter" aria-label="Выбор категорий курсов">
          <SidebarCategoryFilter
            blockTitle = 'Категории'
            categories= {categories}
            activeCategory= {categorySlug}
            isLoading = {isCategoriesLoading}
            isError={isCategoriesError}
          />
        </div>

        <div className="list-layout__block-list block-list">
          <form className="block-list__form" action="">
            <input className="block-list__search" type="search" placeholder="Поиск по курсам" />
          </form>

          {/*<div className='block-list__products products products--courses'>*/}
          <CoursesList {...{courses, isLoading: isCoursesLoading, paged, setPaged, maxPaged }}/>
          {/*</div>*/}
        </div>
      </div>
    );
  };

  let meta = '';
  if(categorySlug === 'бухгалтер') {
    meta = {
      title: 'Бухгалтерия',
      description: 'Описание для категории "Бухгалтерия"',
      // canonical: 'http://example.com/path/to/page',
      // meta: {
      //     charset: 'utf-8',
      //     name: {
      //         keywords: 'react,meta,document,html,tags'
      //     }
      // }
    };
  }

  return (
    <>
      <DocumentMeta {...meta} />
      <PageLayout>
        <>
          <PageHeader
            headerPic={ PageHeaderPic }
            sloganImg={ SloganImg }
            visibleButtonAdd={false}
          />
          {content}
        </>
      </PageLayout>
    </>
  );
}

PageCourses.propTypes = {
  title: PropTypes.string.isRequired,
};

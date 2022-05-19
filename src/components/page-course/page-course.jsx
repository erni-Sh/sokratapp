/* eslint-disable */
import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import useDocumentTitle from '../../utils/useDocumentTitle';
import PropTypes from 'prop-types';

import PageLayout from '../page-layout/page-layout';
// import { useSelector } from 'react-redux';

// import OffersListLoader from '../offers-list-loader/offers-list-loader';
import OffersList from '../offers-list/offers-list';
import { useGetMainCategoriesQuery } from '../../store/api/main-categories-slice';
import { nanoid } from 'nanoid';

// import Message from '../message/message';

import { CourseInfo } from './course-info';
import { SidebarInfo } from '../sidebar-info/sidebar-info';
import { CourseTeachers } from './course-teachers';
import { CourseProgram } from './course-program';
import { CourseCertificate } from './course-certificate';
import { ButtonPayment } from '../popup-payment/popup-payment';
import { CourseReview } from './course-review';

import { PageHeader } from '../page-header/page-header';
import PageHeaderPic from '../../img/page-header/page-header-3.svg';
import SloganImg from '../../img/page-header/slogan-3.png';

import { useGetCourseQuery } from '../../store/api/course-slice';
import Message from '../message/message';



export default function PageCourse({title}) {
  const { courseSlug } = useParams();

  const {
    data: course,
    isFetching: isCourseLoading,
    isError: isCourseError,
    refetch: refetchCourse,
  } = useGetCourseQuery(courseSlug);
  // console.log(course);

  const {
    data: mainCategories,
    // isFetching: isMainCategoriesLoading,
    isError: isMainCategoriesError,
    refetch: refetchMainCategories,
  } = useGetMainCategoriesQuery();

  const refetchAllEndpoints = useCallback(() => {
    refetchCourse();
    refetchMainCategories();
  }, [
    refetchCourse,
    refetchMainCategories,
  ]);

  const isFetchingError = isCourseError || isMainCategoriesError;
  // const isFetchingError = false;
  let content;

  // if(!isCourseLoading) {
  //   console.log(course);

  //   const {
  //     illustration,
  //     teachers,
  //     edu_program: edProgram,
  //     photo_certificate: photoCertificate,
  //     comments,
  //   } = course;

  //   isCoursePicture = illustration;
  // }
  useDocumentTitle(title, course?.title);

  if(isFetchingError) {
    content = (
      <>
        <PageHeader headerPic={ PageHeaderPic } sloganImg={ SloganImg } course={{}} />
        <Message onButtonClick={refetchAllEndpoints} />;
      </>
    );

  } else {

    let mainCategoryComponents;
    if(mainCategories) {
      // console.log(mainCategories);
      mainCategoryComponents = mainCategories.map((cat, index) => {
        const sliderWidthAuto = false;
        const slidesPerView = 4;
        const navigation=true;

        return (
          <OffersList
            key={nanoid()}
            title={cat.title}
            // offersIds={coursesIds}
            mainCourses={cat.main_courses}
            componentId={nanoid()}
            slidesPerView={slidesPerView}
            navigation={navigation}
            sliderWidthAuto={sliderWidthAuto}
          />);
      });
    }

    content = (
      <>
        <PageHeader
          headerPic={PageHeaderPic}
          sloganImg={SloganImg}
          course={course}
        />
        <div className="course">
          <div className="course__wrapper">
            <CourseInfo database={course} isLoading={isCourseLoading} />
            <div className="course__sidebar">
              <SidebarInfo database={course} isLoading={isCourseLoading} />
            </div>
            {(course?.teachers.length) ?
              <CourseTeachers teachers={course.teachers} /> : ''}
            {(course?.edu_program.length) ?
              <CourseProgram program={course.edu_program} /> : ''}
            <CourseCertificate certificate={course && course.photo_certificate} />
            <ButtonPayment courseData={course} isLoading={isCourseLoading}/>
            {course?.comments.length ? <CourseReview database={course.comments} /> : ''}
          </div>
        </div>
        <div className='container'>
          <div className="compilations swiper">
            {/*{!mainCategories
              ? <OffersListLoader isWrapper />
              : mainCategoryComponents[1]}
            {!mainCategories
              ? <OffersListLoader isWrapper />
              : mainCategoryComponents[2]}
            {!mainCategories
              ? <OffersListLoader isWrapper />
              : mainCategoryComponents[3]}*/}
          </div>
        </div>
      </>
    );
  }

  return (
    <PageLayout>
      {content}
    </PageLayout>
  );
};

PageCourse.propTypes = {
  title: PropTypes.string.isRequired,
};
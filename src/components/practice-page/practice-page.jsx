/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

import { fetchData } from '../../store/api/fetch-custom';
import { wordPressApiResourcePath } from '../../const.jsx';

import PageLayout from '../page-layout/page-layout';
import { useSelector } from 'react-redux';

import OffersListLoader from '../offers-list-loader/offers-list-loader';
import OffersList from '../offers-list/offers-list';
import { selectNonEmptyMainCategories, useGetMainCategoriesQuery } from '../../store/api/main-categories-slice';
import { nanoid } from 'nanoid';

import Message from '../message/message';

import { CourseInfo } from '../page-course/course-info';
import { SidebarInfo } from '../sidebar-info/sidebar-info';
// import { CourseTeachers } from '../course-page/course-teachers';
// import { CourseProgram } from '../course-page/course-program';
// import { CourseCertificate } from './course-certificate';
import { PracticeSkills } from './practice-skills';
import { ButtonPayment } from '../popup-payment/popup-payment';
// import { CourseReview } from '../course-page/course-review';

import { PageHeader } from '../page-header/page-header';
import PageHeaderPic from '../../img/page-header/page-header-3.svg';
import SloganImg from '../../img/page-header/slogan-3.png';

import { useGetCourseQuery } from '../../store/api/course-slice';
import { useGetPracticeQuery } from '../../store/api/practice-slice';
// const PracticeData = {
//   id: 12345,
//   duration: '23 месяца',
//   format: 'online',
//   partners: 'Государственный университет управления',
//   partnersTrumb: '/img/course-page/course-partner-logo@2x.png',
//   partnerLink: '',

//   practiceTitle: 'Frontend Developer',
//   pricticePrice: 10000,
//   practiceDescr: 'Курс General Management программы MBA предназначен для подготовки элитных руководителей, которые владеют фундаментальными знаниями о современном состоянии экономики, обладают глубоким пониманием логики стратегического...',
//   practiceLink: '',
//   practiceHardSkills: ['CSS', 'CSS', 'CSS', 'HTML', 'HTML', 'HTML', 'GitHub','GitHub', 'GitHub'],
//   practiceSoftSkills: ['CSS', 'CSS', 'CSS', 'HTML', 'HTML', 'HTML', 'GitHub','GitHub', 'GitHub'],
// };

// const CourseData = {
//   id: 12345,
//   title: 'МВА – GENERAL MANAGEMENT',
//   price: 700000,
//   descr: 'Курс General Management программы MBA предназначен для подготовки элитных руководителей, которые владеют фундаментальными знаниями о современном состоянии экономики, обладают глубоким пониманием логики стратегического...',
//   duration: '23 месяца',
//   format: 'online',
//   partners: 'Государственный университет управления',
//   partnersTrumb: '/img/course-page/course-partner-logo@2x.png',
//   partnerLink: '',
// };

// const courseTeachersData = [
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '1',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '2',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '3',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '4',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '5',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '4',
//   },
//   {
//     name: 'Валентин Пановский',
//     trumb: '/img/course-page/teacher-photo.jpg',
//     link: '',
//     id: '5',
//   },  
// ];

// const courseProgramData = [
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '1',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '2',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '3',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '4',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '5',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '6',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '7',
//   },
//   {
//     title: 'Python для Data Science',
//     duration: 8,
//     id: '8',
//   },
// ];

// const courseCetificateData = {
//   name: 'Сертификат курса МВА – GENERAL MANAGEMENT',
//   trumb: '/img/course-page/certificate.jpg',
//   link: '',
// };

export default function PracticePage() {
  const { practiceSlug } = useParams();

  // const [ practice, setPractice ] = useState('');
  // const [ totalData, setTotalData ] = useState('');

  // useEffect(async () => {
  //   !totalData &&
  //   setTotalData(await fetchData({
  //     practice: wordPressApiResourcePath.PRACTICE + '/' + practiceSlug,
  //   }));
  //   // if(totalData) console.log(totalData);
  //   if(totalData && !totalData.error) {
  //     setPractice(totalData.practice.data);
  //   };
  // });
  // console.log(practice);
  // // let campaigns, isCampaignsLoading, isCampaignsError, refetchCampaigns;
  // // console.log('рендер!');

  // // const mainCategories = useSelector(selectNonEmptyMainCategories);

  // const refetchAllEndpoints = useCallback(() => {
  //   setTotalData('');
  // }, [
  //   setTotalData,
  // ]);

  const {
    data: practice,
    isFetching: isPracticeLoading,
    isError: isPracticeError,
    refetch: refetchPractice,
  } = useGetPracticeQuery(practiceSlug);
  // console.log(practice);

  const {
    data: mainCategories,
    isFetching: isMainCategoriesLoading,
    isError: isMainCategoriesError,
    refetch: refetchMainCategories,
  } = useGetMainCategoriesQuery();

  const refetchAllEndpoints = useCallback(() => {
    refetchPractice();
    refetchMainCategories();
  }, [
    refetchPractice,
    refetchMainCategories,
  ]);

  let isFetchingError = isPracticeError || isMainCategoriesError;

  let mainCategoryComponents;
  if(mainCategories) {
    // console.log(mainCategories);
    mainCategoryComponents = mainCategories.map(({ id, title, main_courses }, index) => {
      let sliderWidthAuto = false;
      let slidesPerView = 4;
      let navigation=true;

      return (
        <OffersList
          key={nanoid()}
          title={title}
          // offersIds={coursesIds}
          mainCourses={main_courses}
          componentId={nanoid()}
          slidesPerView={slidesPerView}
          navigation={navigation}
          sliderWidthAuto={sliderWidthAuto}
        />);
    });
  }

  let content;

  if(isFetchingError) {
    content = (
      <>
        <PageHeader headerPic={PageHeaderPic} sloganImg={SloganImg} />
        <Message onButtonClick={refetchAllEndpoints} />;
      </>
    )
  } else {
    content = (
      <>
        {(practice && practice.job_img) ?
        <PageHeader
          headerPic={practice.job_img}
          sloganImg=''
        />
        : <PageHeader
          headerPic={PageHeaderPic}
          sloganImg={SloganImg}
        />}
        <div className="course">
          <div className="course__wrapper practice__wrapper">
            <CourseInfo database={practice} isLoading={isPracticeLoading} />
            <div className="course__sidebar">
              <SidebarInfo
                page='practice'
                database={practice}
                isLoading={isPracticeLoading}
              />
            </div>
            <PracticeSkills database={practice} />
            <ButtonPayment page='practice' courseData={practice} isLoading={isPracticeLoading} />
            {/*<CourseReview />*/}
          </div>
        </div>

        <div className="compilations container swiper">
          {!practice
            ? <OffersListLoader isWrapper />
            : <OffersList
                key={nanoid()}
                title='Похожие курсы'
                // offersIds={coursesIds}
                mainCourses={practice.job_course}
                componentId={nanoid()}
                slidesPerView={4}
                navigation={true}
                sliderWidthAuto={false}
              />
          }

          {/*{!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[1]}
          {!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[2]}
          {!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[3]} */}             
        </div>

      </>
    );
  }

  // if (isFetchingError) {
  //   content = <Message onButtonClick={refetchAllEndpoints} />;
  // } else {
  //   const isLoading =  isMainCategoriesLoading;
  //   const mainCategoryComponents = mainCategories.map(({ id, title, coursesIds }, index) => {
  //     let sliderWidthAuto = false;
  //     // Customize first slider
  //     if (index === 0) {
  //       // Set first component custom slides per view value
  //       //slidesPerView = FIRST_MAIN_COMPONENT_SLIDES_PER_VIEW;
  //       //Fix css width because of the lack of the wrapper
  //       // html elements or css classes!
  //       sliderWidthAuto = true;
  //     }

  //     return (
  //       <OffersList
  //         key={id}
  //         title={title.rendered}
  //         offersIds={coursesIds}
  //         componentId={nanoid()}
  //         sliderWidthAuto={sliderWidthAuto}
  //       />);
  //   });

  //   content = (
  //     <>
  //       {content}
  //       {isLoading
  //         ? <OffersListLoader isWrapper />
  //         : mainCategoryComponents[1]}
  //     </>
  //   );
  // }

  return (
    <PageLayout>
      {content}
    </PageLayout>
  );
}

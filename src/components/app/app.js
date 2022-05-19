import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import "../css/App.css";
import { AppRoute } from '../../const';
// import CategoriesPage from '../categories-page/categories-page';
// import CoursesByCategoryPage from '../courses-by-category-page/courses-by-category-page';

import { MainPage } from '../main-page/main-page';
import PageCourse from '../page-course/page-course';
import PageCourses from '../page-courses/page-courses';
import NotFoundPage from '../not-found-page/not-found-page';

import PracticesPage from '../practices-page/practices-page';
import PracticePage from '../practice-page/practice-page';
import SearchResultPage from '../search-result-page/search-result-page';

import InstructorPage from '../instructor-page/instructor-page';
import PartnerPage from '../partner-page/partner-page';

import PopUpCookie from '../popup-cookie/popup-cookie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage titleDoc="Sokrat — Тысячи знаний внутри"/>
        </Route>
        {/*for prerender*/}
        <Route exact path={AppRoute.INDEX_FILE}>
          <MainPage titleDoc="Sokrat — Тысячи знаний внутри"/>
        </Route>
        <Route exact path={AppRoute.CATEGORIES}>
          {/*<CategoriesPage />*/}
          <PageCourses title='Категория' />
        </Route>
        <Route exact path={AppRoute.COURSES}>
          <PageCourses title='Каталог курсов' />
        </Route>
        <Route exact path={AppRoute.COURSE}>
          <PageCourse title='Курс' />
        </Route>
        <Route exact path={AppRoute.PRACTICES}>
          <PracticesPage title='Вакансии' />
        </Route>
        <Route exact path={AppRoute.PRACTICE}>
          <PracticePage />
        </Route>

        <Route exact path={AppRoute.SEARCH_RESULT}>
          <SearchResultPage />
        </Route>
        {/*<Route exact path={AppRoute.COURSES_BY_CATEGORY}>
          <CoursesByCategoryPage />
        </Route>*/}
        <Route exact path={AppRoute.INSTRUCTOR}>
          <InstructorPage title='Преподаватель' />
        </Route>

        <Route exact path={AppRoute.PARTNER}>
          <PartnerPage title='Партнёр' />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <PopUpCookie />
    </BrowserRouter>
  );
}

export default App;

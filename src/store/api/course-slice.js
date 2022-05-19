// /* eslint-disable */
// import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
// import { createEntityAdapter } from '@reduxjs/toolkit';
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';
import { generatePath } from 'react-router';
// Может удалить этот файл

// const courseAdapter = createEntityAdapter();

export const courseSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: (slug) => generatePath(':path/:slug', {
        path: wordPressApiResourcePath.COURSE,
        slug: slug,
      }),
      // transformResponse: (response) => courseAdapter.addMany(courseAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetCourseQuery } = courseSlice;
// const selectCourseResult = courseSlice.endpoints.getCourse.select();

// export const selectAllCourse = createSelector(
//   selectCourseResult,
//   (coursesResult) => courseResult?.data ?? {},
// );

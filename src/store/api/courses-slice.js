/* eslint-disable */
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';
import { generatePath } from 'react-router';

const coursesAdapter = createEntityAdapter();

export const coursesSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (params) => {
        // console.log(params);
        return wordPressApiResourcePath.COURSES + params;
      },
      // transformResponse: (response) => coursesAdapter.addMany(coursesAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetCoursesQuery } = coursesSlice;

const selectCoursesResult = coursesSlice.endpoints.getCourses.select();

export const selectAllCourses = createSelector(
  selectCoursesResult,
  (coursesResult) => coursesResult?.data ?? {},
);

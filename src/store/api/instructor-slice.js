/* eslint-disable */
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';
import { generatePath } from 'react-router';

// Может удалить этот файл

// const courseAdapter = createEntityAdapter();

export const instructorSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getInstructor: builder.query({
      query: (slug) => generatePath(':path/:slug', {
        path: wordPressApiResourcePath.INSTRUCTOR,
        slug: slug,
      }),
      // transformResponse: (response) => courseAdapter.addMany(courseAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetInstructorQuery } = instructorSlice;

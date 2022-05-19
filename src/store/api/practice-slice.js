// /* eslint-disable */
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';
import { generatePath } from 'react-router';

// Может удалить этот файл

// const courseAdapter = createEntityAdapter();

export const practiceSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getPractice: builder.query({
      query: (slug) => generatePath(':path/:slug', {
        path: wordPressApiResourcePath.PRACTICE,
        slug: slug,
      }),
      // transformResponse: (response) => courseAdapter.addMany(courseAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetPracticeQuery } = practiceSlice;

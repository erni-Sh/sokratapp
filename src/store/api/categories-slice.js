// import { createEntityAdapter } from '@reduxjs/toolkit';
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';

// const categoriesAdapter = createEntityAdapter();

export const categoriesSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => wordPressApiResourcePath.CATEGORIES,
      // transformResponse: (response) => categoriesAdapter.addMany(categoriesAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesSlice;

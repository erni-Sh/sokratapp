/* eslint-disable */
import { wordPressApiResourcePath } from '../../const';
import { transformMainCategory } from '../../utils/api';
import { wordPressApi } from './word-press-api';
import { selectAllCourses } from './courses-slice';
import { createSelector } from '@reduxjs/toolkit';

export const mainCategoriesSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getMainCategories: builder.query({
      query: () => wordPressApiResourcePath.MAIN_CATEGORIES,
      transformResponse: (response) => response
        .map(transformMainCategory)
      // Sort ascending base on slot field.
      // First category in array will be placed in first slot
      // on the main page and so on.
        .sort(({ slot: slotA }, { slot: slotB }) => slotA - slotB),
    }),
  }),
});

export const { useGetMainCategoriesQuery } = mainCategoriesSlice;

const selectMainCategoriesResult = mainCategoriesSlice.endpoints.getMainCategories.select();

export const selectAllMainCategories = createSelector(
  selectMainCategoriesResult,
  (result) => result?.data ?? [],
);

// Select all categories which has at least one actual course id
// existed in courses slice
// export const selectNonEmptyMainCategories = createSelector(
//   selectAllMainCategories,
//   selectAllCourses,
//   (mainCategories, { entities }) => (
//     mainCategories.filter(({ coursesIds }) => coursesIds.some((id) => entities?.[id]))
//   ),
// );

/* eslint-disable */
// import { createEntityAdapter } from '@reduxjs/toolkit';
import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';
import { generatePath } from 'react-router';

// const partnersAdapter = createEntityAdapter();

export const partnersSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: () => wordPressApiResourcePath.PARTNERS,
      // transformResponse: (response) => partnersAdapter.addMany(partnersAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetPartnersQuery } = partnersSlice;

export const partnerSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartner: builder.query({
      query: (slug) => generatePath(':path/:slug', {
        path: wordPressApiResourcePath.PARTNER,
        slug: slug,
      }),
      // transformResponse: (response) => partnersAdapter.addMany(partnersAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetPartnerQuery } = partnerSlice;

export const partnersMainSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartnersMain: builder.query({
      query: () => wordPressApiResourcePath.PARTNERS_MAIN,
      // transformResponse: (response) => partnersAdapter.addMany(partnersAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetPartnersMainQuery } = partnersMainSlice;

export const partnersPracticeMainSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartnersPracticeMain: builder.query({
      query: () => wordPressApiResourcePath.PARTNERS_PRACTICE_MAIN,
      // transformResponse: (response) => partnersAdapter.addMany(partnersAdapter.getInitialState(), response),
    }),
  }),
});

export const { useGetPartnersPracticeMainQuery } = partnersPracticeMainSlice;

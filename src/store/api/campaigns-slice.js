import { wordPressApiResourcePath } from '../../const';
import { wordPressApi } from './word-press-api';

export const campaignsSlice = wordPressApi.injectEndpoints({
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: () => wordPressApiResourcePath.CAMPAIGNS,
    }),
  }),
});

export const { useGetCampaignsQuery } = campaignsSlice;

// getPhotos: builder.query({
//   query: (limit = 10) => ({
//     url: "",
//     method: "GET",
//     params: { per_page: limit },
//   }),
// }),

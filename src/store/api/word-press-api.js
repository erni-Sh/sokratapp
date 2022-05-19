
/* eslint-disable */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const WORD_PRESS_API_BASE_URL = 'https://sokratapp.site/wp-json/wp/v2/';

// const WORD_PRESS_API_BASE_URL = 'https://92.255.111.192/wp-json/wp/v2/';

// const WORD_PRESS_API_BASE_URL = 'https://u99351.test-handyhost.ru/wp-json/wp/v2/';

// https://u99351.test-handyhost.ru/wp-json/wp/v2/
// https://sokratapp.ru/wp-json/wp/v2/

export const wordPressApi = createApi({
  reducerPath: 'wordPressApi',
  baseQuery: fetchBaseQuery({ baseUrl: WORD_PRESS_API_BASE_URL }),
  endpoints: () => ({}),
});


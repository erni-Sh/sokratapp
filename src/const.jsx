export const AppRoute = {
  ROOT: '/',
  INDEX_FILE: '/index.html/',  // for prerender
  ERROR: '/error/',
  CATEGORIES: '/courses/category/:categorySlug/',
  COURSES: '/courses/',
  COURSE: '/courses/:courseSlug/',
  PRACTICES: '/practices/',
  PRACTICE: '/practices/category/:practiceSlug/',

  COURSES_BY_CATEGORY: '/courses-by-category/:category/',
  SEARCH_RESULT: '/search-result/',
  PARTNERS: '/partners/',
  PARTNER: '/partners/:partnerSlug/',

  INSTRUCTOR: '/instructor/:instructorSlug/',
};

export const DECIMAL_RADIX = 10;

export const wordPressApiResourcePath = {
  CAMPAIGNS: 'sokrat_promo',
  MAIN_CATEGORIES: 'sokrat_main_category',
  COURSES: 'courses',
  COURSE: 'course',
  PARTNERS_MAIN: 'sokrat_partner_main',
  PARTNERS_PRACTICE_MAIN: 'sokrat_partn_job_mai',
  PARTNERS: 'sokrat_vacancy_partn',
  PARTNER: 'learn_partner',
  PRACTICE_PARTNERS: 'sokrat_learn_partner',
  PRACTICE: 'job',
  CATEGORIES: 'product_cat',
  INSTRUCTOR: 'teacher',
};

export const Breakpoint = {
  LARGE: 1440,
  MEDIUM: 768,
  SMALL: 320,
};


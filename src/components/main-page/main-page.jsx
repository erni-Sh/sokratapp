// /* eslint-disable */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { MainSlider } from '../main-slider/main-slider';
import { CategoryList } from '../category-list/category-list';
import { MobileAppInfo } from '../mobile-app-info/mobile-app-info';
import OffersList from '../offers-list/offers-list';
import { Partners } from '../partners/partners';
import { useGetMainCategoriesQuery } from '../../store/api/main-categories-slice';
import { useGetPartnersMainQuery } from '../../store/api/partners-slice';
import { useGetPartnersPracticeMainQuery } from '../../store/api/partners-slice';
import { useGetCategoriesQuery } from '../../store/api/categories-slice';
import { nanoid } from 'nanoid';
import OffersListLoader from '../offers-list-loader/offers-list-loader';
import { useGetCampaignsQuery } from '../../store/api/campaigns-slice';
import Message from '../message/message';
import PageLayout from '../page-layout/page-layout';

// import useDocumentTitle from '../../utils/useDocumentTitle';
import DocumentMeta from 'react-document-meta';

const SLOTS_NUMBER = 4;
// Multiple instances of Swiper slider on the page requires
// unique identification of the control elements(slider buttons).
// Based on the unique components ids we can generate unique classnames
// and then identify control elements with class selectors.
const PARTNERS_COMPONENT_ID = nanoid();
const PRACTICE_PARTNERS_COMPONENT_ID  = nanoid();

// const FIRST_MAIN_COMPONENT_WIDTH = 1440;
// const FIRST_MAIN_COMPONENT_SLIDES_PER_VIEW = 3;

export function MainPage({titleDoc}) {
  // useDocumentTitle(titleDoc);

  const meta = {
    title: titleDoc,
    // description: 'Описание для категории "Бухгалтерия"',
    // canonical: 'http://example.com/path/to/page',
    // meta: {
    //     charset: 'utf-8',
    //     name: {
    //         keywords: 'react,meta,document,html,tags'
    //     }
    // }
  };

  const {
    data: campaigns,
    isFetching: isCampaignsLoading,
    isError: isCampaignsError,
    refetch: refetchCampaigns,
  } = useGetCampaignsQuery();
  // console.log(campaigns);

  const {
    data: mainCategories,
    isFetching: isMainCategoriesLoading,
    isError: isMainCategoriesError,
    refetch: refetchMainCategories,
  } = useGetMainCategoriesQuery();
  // console.log(mainCategories);

  const {
    data: categories,
    isFetching: isCategoriesLoading,
    isError: isCategoriesError,
    refetch: refetchCategories,
  } = useGetCategoriesQuery();
  // console.log(categories);

  // const {
  //   isFetching: isCoursesLoading,
  //   isError: isCoursesError,
  //   refetch: refetchCourses,
  // } = useGetCoursesQuery();

  const {
    data: partners,
    isFetching: isPartnersLoading,
    isError: isPartnersError,
    refetch: refetchPartners,
  } = useGetPartnersMainQuery();
  // console.log(partners);
  const {
    data: practicePartners,
    isFetching: isPracticePartnersLoading,
    isError: isPracticePartnersError,
    refetch: refetchPracticePartners,
  } = useGetPartnersPracticeMainQuery();
  // console.log(practicePartners);

  // const mainCategories = useSelector(selectNonEmptyMainCategories);

  const refetchAllEndpoints = useCallback(() => {
    refetchMainCategories();
    refetchPartners();
    refetchPracticePartners();
    refetchCategories();
    refetchCampaigns();
  }, [
    refetchMainCategories,
    refetchPartners,
    refetchPracticePartners,
    refetchCategories,
    refetchCampaigns,
  ]);

  const isFetchingError = isMainCategoriesError
    || isPartnersError
    || isPracticePartnersError
    || isCategoriesError
    || isCampaignsError;

  // let isLoading = false;
  // let isFetchingError = false;
  let content = null;

  if (isFetchingError) {
    content = <Message onButtonClick={refetchAllEndpoints} />;
  } else {
    // Set global loading state on the page.
    // Do not show any components content until all other components
    // will be loaded.
    const isLoading = isMainCategoriesLoading
      || isPartnersLoading
      || isPracticePartnersLoading
      || isCategoriesLoading
      || isCampaignsLoading;

    let mainCategoryComponents;
    if(mainCategories) {
      // console.log(mainCategories);
      mainCategoryComponents = mainCategories.map(({ id, title, main_courses: mainCourses }, index) => {
        const sliderWidthAuto = false;
        const slidesPerView = 4;
        const navigation=true;
        // Customize first slider
        // if (index === 0) {
        //   // Set first component custom slides per view value
        //   slidesPerView = FIRST_MAIN_COMPONENT_SLIDES_PER_VIEW;
        //   // navigation=false;
        //   //Fix css width because of the lack of the wrapper
        //   // html elements or css classes!
        //   sliderWidthAuto = true;
        // }

        const OffersListProps = {title, mainCourses, componentId: nanoid(), slidesPerView, navigation, sliderWidthAuto, isMainCategoriesLoading};
        return (
          <OffersList {...OffersListProps} key={id} />);
      });
    }


    content = (
      <>
        <MainSlider campaigns={campaigns} isLoading={isLoading} />
        <div className='container'> {/*block-sb-right*/}
          <div className='block-sb-right__carousel'> {/*класс удалить*/}
            {!mainCategories
              ? (
                <OffersListLoader
                  slidesCount={4}
                  // width={FIRST_MAIN_COMPONENT_WIDTH}
                />)
              : mainCategoryComponents[0]}
          </div>

          <CategoryList
            categories={categories}
            isLoading={isLoading}
          />
          {/*<div className='block-sb-right__wrapper'>
            <div className='block-sb-right__content'>
              <div className='block-sb-right__carousel'>
                {!mainCategories
                  ? (
                    <OffersListLoader
                      slidesCount={3}
                      width={FIRST_MAIN_COMPONENT_WIDTH}
                    />)
                  : mainCategoryComponents[0]}
              </div>

              <div className='block-sb-right__filter'>
                <CategoryList
                  categories={categories}
                  isLoading={isLoading}
                />
              </div>
            </div>
            <MainPageSidebar />
          </div>*/}
        </div>
        <MobileAppInfo />

        <div className='container'>
          {!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[1]}
          {!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[2]}

          <Partners
            title='Обучайся в этих компаниях'
            partners={!isLoading ? partners[0].partners : []}
            isLoading={isPartnersLoading}
            componentId={PARTNERS_COMPONENT_ID}
          />

          {!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[3]}
          {/*{!mainCategories
            ? <OffersListLoader isWrapper />
            : mainCategoryComponents[4]}*/}

          <Partners
            title='Работай в этих компаниях'
            partners={!isLoading ? practicePartners[0].partners : []}
            isLoading={isPracticePartnersLoading}
            componentId={PRACTICE_PARTNERS_COMPONENT_ID}
          />

          {isLoading || mainCategoryComponents.slice(SLOTS_NUMBER)}
        </div>
      </>
    );

  }

  // content = '123';

  return (
    <>
      <DocumentMeta {...meta} />
      <PageLayout>
        {content}
      </PageLayout>
    </>
  );
}

MainPage.propTypes = {
  titleDoc: PropTypes.string.isRequired,
};

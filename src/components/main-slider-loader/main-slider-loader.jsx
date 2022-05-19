/*eslint-disable*/
import React from 'react';
import ContentLoader from 'react-content-loader';

const WIDTH_PX = 1440;
const HEIGHT_PX = 400;
const BACKGROUND_COLOR = '#f3f3f3';
const FOREGROUND_COLOR = '#ecebeb';
const SPEED_IN_SECONDS = 1;

function MainSliderLoader(props) {
  return (
    <div className="main-page-swiper__loader">
      <ContentLoader
        speed={SPEED_IN_SECONDS}
        width={WIDTH_PX}
        height={HEIGHT_PX}
        viewBox={`0 0 ${WIDTH_PX} ${HEIGHT_PX}`}
        backgroundColor={BACKGROUND_COLOR}
        foregroundColor={FOREGROUND_COLOR}
        {...props}
      >
        <rect width={WIDTH_PX} height={HEIGHT_PX} />
      </ContentLoader>
    </div>);
}

export default MainSliderLoader;

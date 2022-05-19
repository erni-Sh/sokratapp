import React from 'react';
import ContentLoader from 'react-content-loader';

const WIDTH_PX = 325;
const HEIGHT_PX = 488;
const BACKGROUND_COLOR = '#f3f3f3';
const FOREGROUND_COLOR = '#ecebeb';
const SPEED_IN_SECONDS = 1;

function OfferLoader(props) {
  return (
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
    </ContentLoader>);
}

export default OfferLoader;

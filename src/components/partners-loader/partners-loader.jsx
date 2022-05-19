import React from 'react';
import ContentLoader from 'react-content-loader';

const DEFAULT_SLIDES_COUNT = 6;
const SLIDE_WIDTH_IN_PX = 190;
const SLIDE_HEIGHT_IN_PX = 190;
const SLIDES_HORIZONTAL_GAP_IN_PX = 35;
const SLIDES_START_X_IN_PX = 0;
const SLIDES_START_Y_IN_PX = 20;

function PartnersLoader(props) {
  const slides = Array(DEFAULT_SLIDES_COUNT).fill(null);

  return (
    <ContentLoader
      speed={1}
      width={1440}
      height={230}
      viewBox="0 0 1440 230"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      {slides.map(( _, index) => {
        const startXInPx = SLIDES_START_X_IN_PX + (SLIDE_WIDTH_IN_PX + SLIDES_HORIZONTAL_GAP_IN_PX) * index;

        return (
          <rect
            key={`slide_${startXInPx}_${SLIDES_START_Y_IN_PX}`}
            x={startXInPx}
            y={SLIDES_START_Y_IN_PX}
            rx="0"
            ry="0"
            width={SLIDE_WIDTH_IN_PX}
            height={SLIDE_HEIGHT_IN_PX}
          />
        );
      })}
    </ContentLoader>
  );
}

export default PartnersLoader;

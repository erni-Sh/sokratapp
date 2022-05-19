/* eslint-disable */
import ContentLoader from 'react-content-loader';

export const SquareLoader = () => (
    <ContentLoader className='loader-square'>
      <rect x="0" y="0" rx="10" ry="10" width="373" height="373" />
    </ContentLoader>
  );

export const ButtonLoader = () => (
    <ContentLoader className='loader-button'>
      <rect x="0" y="0" rx="10" ry="10" width="373" height="45" />
    </ContentLoader>
  );

export const DescrLoader = () => (
    <ContentLoader className='loader-descr' height={20} >
      <rect x="0" y="0" rx="10" ry="10" width="300" height="20" viewBox="0 0 380 70" />
    </ContentLoader>
  );

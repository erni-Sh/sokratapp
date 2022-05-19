import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function useDocumentTitle(maintitle, subtitle) {
  // const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = subtitle ? `${maintitle} | ${subtitle}` : maintitle;
  }, [maintitle, subtitle]);
  // useEffect(() => () => {
  //   if (!prevailOnUnmount) {
  //     document.title = defaultTitle.current;
  //   }
  // }, []);
}

useDocumentTitle.propTypes = {
  maintitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

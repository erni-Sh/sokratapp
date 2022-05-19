import React from 'react';
import PropTypes from 'prop-types';

function MainPageSidebar({ className }) {
  // Do not show component until backend ready
  // return null;

  // Uncomment when backend ready
  return (
    <div className='block-sb-right__sidebar'>
      <div className='banner'>
      </div>
    </div>
  );
}

MainPageSidebar.propTypes = {
  className: PropTypes.string,
};

export default MainPageSidebar;

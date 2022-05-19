import PropTypes from 'prop-types';

export const partner = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
});

export const category = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictogram: PropTypes.string.isRequired,
});

// export const campaign = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   banner: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// });

import { trimChar } from './util';
import { DECIMAL_RADIX } from '../const';

const ID_COURSE_SEPARATOR = '/';

export const transformMainCategory = (category) => {
  let adaptedCategory = null;

  // Transform id_course from string '1/20/33/57' to array [1,20,33,57]
  let { id_course: idCourse, slot } = category;

  // Check if idCourse is non-empty string in '1/20/33/57' format
  if (typeof idCourse === 'string' && /^(\/*\d+\/*)+$/gm.test(idCourse)) {
    idCourse = trimChar(idCourse.trim(), ID_COURSE_SEPARATOR)
      .split('/')
      .map((course) => parseInt(course, DECIMAL_RADIX));
  } else {
    idCourse = [];
  }

  // Transform slot field to number
  slot = parseInt(slot, DECIMAL_RADIX);
  // Set empty strings or something that is not
  // a number to the end of the list.
  if (Number.isNaN(slot)) {
    slot = +Infinity;
  }

  adaptedCategory = {
    ...category,
    // Remove non-unique ids
    coursesIds: [...new Set(idCourse)],
    slot,
  };

  delete adaptedCategory.id_course;

  return adaptedCategory;
};

export const transformPracticePartner = (partner) => {
  const transformedPartner = {
    ...partner,
    title: partner.title.rendered,
  };

  return transformedPartner;
};

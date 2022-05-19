// /* eslint-disable */
const defaultState = {
  courses: [],
};

const ADD_COURSE = 'ADD_COURSE';
const GET_COURSE = 'GET_COURSE';

export const compareReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case ADD_COURSE:
    //   return state.courses.filter((course) => course.id === payload.id).length === 0
    //     ? {...state, courses: [...state.courses, payload] }
    //     : state;
    // проверка на самой странице
    case ADD_COURSE:
      return {...state, courses: [...state.courses, payload] };
    case GET_COURSE:
      return {...state, courses: state.courses.filter((course) => course.id !== payload.id) };
    default:
      return state;
  }
};

// actions creators
export const addCourseAction = (payload) => ({type:'ADD_COURSE', payload});
export const getCourseAction = (payload) => ({type:'GET_COURSE', payload});

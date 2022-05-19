/* eslint-disable */

// import { persistedStore } from '../../index.js';
// console.log(persistedStore);

const defaultState = {
  categories: ['%d0%b1%d0%b5%d1%81%d0%bf%d0%bb%d0%b0%d1%82%d0%bd%d0%be%d0%b5-%d0%be%d0%b1%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5'], //164, бесплатное обучение
};

const ADD_CATEGORIES = 'ADD_CATEGORIES';

export const checkedReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case ADD_CATEGORIES:
      // return { categories: payload.map((id) => Number(id)) };
      return { categories: payload };      
    // case GET_CATEGORY:
    //   return {...state, categories: state.courses.filter((course) => course.id !== payload.id) };
    default:
      return state;
  }
};

// actions creators
export const addCategoriesAction = (payload) => ({type:ADD_CATEGORIES, payload});

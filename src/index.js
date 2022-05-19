/* eslint-disable */
import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";

import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { coursesSlice } from './store/api/courses-slice';
import { wordPressApi } from './store/api/word-press-api';
import { compareReducer } from './store/compare-course/compare-reducer.js';
import { checkedReducer } from './store/checked-categories/checked-categories.js';
import { cookieReducer } from './store/cookie-reducer/cookie-reducer.js';

import './sass/style.scss';
import App from './components/app/app';

// localStorage.clear();

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('sokratapp_state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('sokratapp_state');
    return stateStr ? JSON.parse(stateStr) : [];
  } catch (e) {
    // console.error(e);
    return [];
  }
};

const persistedStore = loadFromLocalStorage();
if(typeof persistedStore.checked?.categories[0] === 'number')
  delete persistedStore.checked; //временно
delete persistedStore.wordPressApi; //возможно, стоит удалять до сохранения

const allReducers = combineReducers({
  [wordPressApi.reducerPath]: wordPressApi.reducer,
  compare: compareReducer,
  checked: checkedReducer,
  cookieAgree: cookieReducer,
});

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordPressApi.middleware),
  preloadedState: persistedStore
});

store.subscribe(() => {
  let curState = store.getState(); // не независимое копирование?
  saveToLocalStorage(curState);
});

// Start fetching courses (most fat resource) as soon as possible.
// Courses will be permanently added to RTK Query cache.
// https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#fetching-users-manually
// store.dispatch(coursesSlice.endpoints.getCourses.initiate());

// needed?
// setupListeners(store.dispatch);

const innerApp = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
const rootElement = document.getElementById("root");

// for SEO & react snap
if (rootElement.hasChildNodes()) {
  hydrate(innerApp, rootElement);
} else {
  render(innerApp, rootElement);
}

// rootElement.innerHTML = "";
// render(innerApp, rootElement);

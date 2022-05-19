// /* eslint-disable */
const defaultState = false;

const SET_COOKIE_AGREE = 'SET_COOKIE_AGREE';

export const cookieReducer = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case SET_COOKIE_AGREE:
      return true;
    default:
      return state;
  }
};

// actions creators
export const setCookieAgreeAction = () => ({type:'SET_COOKIE_AGREE'});

// Trim character from start and end in the given string
export const trimChar = (inputString, char) => {
  if (typeof inputString !== 'string' || typeof char !== 'string') {return inputString;}

  if (inputString && inputString[0] === char) {
    inputString = inputString.slice(1);
  }

  if (inputString && inputString[inputString.length - 1] === char) {
    inputString = inputString.slice(0, inputString.length - 1);
  }

  return inputString;
};

export const generateAppRoute = (appRoute, appRouteEnding) => `${appRoute.split(':')[0]}${appRouteEnding}/`; //без encodeUri и слэш для SEo

export const scrollPage = (top = 0) => {window.scrollTo(top, 0);};

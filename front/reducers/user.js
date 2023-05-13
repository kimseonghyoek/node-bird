export const initalState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (id, pw) => {
  return {
    type: "LOG_IN_REQUEST",
    data
  };
};

export const loginSuccessAction = (id, pw) => {
  return {
    type: "LOG_IN_SUCCESS",
    data
  };
};

export const loginFailureAction = (id, pw) => {
  return {
    type: "LOG_IN_FAILURE",
    data
  };
};

export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

export const logoutSuccessAction = () => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};

export const logoutFailureAction = () => {
  return {
    type: "LOG_OUT_FAILURE",
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
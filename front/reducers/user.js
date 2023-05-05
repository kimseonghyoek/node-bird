export const initalState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (id, pw) => {
  return {
    type: "LOG_IN",
    data: {
      id: id,
      pw: pw,
    },
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
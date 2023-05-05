import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (id, pw) => {
  return {
    type: "LOG_IN",
    data: {
      id: id,
      pw: pw
    }
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// async action creater

// action creater
const changeNickName = (data) => {   // eslint-disable-line no-unused-vars
  return {
    type: "CHANGE_NICKNAME",
    data: data,
  };
};

// (이전 상태, 액션) => 다음 상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {  
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

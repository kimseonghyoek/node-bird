export const initalState = {
  logInLoading: false, // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const FOLLOW_REQUREST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUREST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const CHANGE_NICK_NAME_REQUEST = "CHANGE_NICK_NAME_REQUEST";
export const CHANGE_NICK_NAME_SUCCESS = "CHANGE_NICK_NAME_SUCCESS";
export const CHANGE_NICK_NAME_FAILURE = "CHANGE_NICK_NAME_FAILURE";

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const loginFailureAction = (data) => {
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const logoutSuccessAction = () => {
  return {
    type: LOG_OUT_SUCCESS,
  };
};

export const logoutFailureAction = () => {
  return {
    type: LOG_OUT_FAILURE,
  };
};

const dummyUser = (data) => ({
  ...data,
  nickname: "Overloper",
  id: 1,
  Posts: [2],
  Followings: [],
  Followers: [],
});

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
      case SIGN_UP_REQUEST:
        return {
          ...state,
          signUpLoading: true,
          signUpDone: false,
          signUpError: null,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          signUpLoading: false,
          signUpDone: true,
          me: null,
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          signUpLoading: false,
          signUpError: action.error,
        };
        case CHANGE_NICK_NAME_REQUEST:
          return {
            ...state,
            changeNicknameLoading: true,
            changeNicknameDone: false,
            changeNicknameError: null,
          };
        case CHANGE_NICK_NAME_SUCCESS:
          return {
            ...state,
            changeNicknameLoading: false,
            changeNicknameDone: true,
          };
        case CHANGE_NICK_NAME_FAILURE:
          return {
            ...state,
            changeNicknameLoading: false,
            changeNicknameError: action.error,
          };
    default:
      return state;
  }
};

export default reducer;

export const initalState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "overloper",
      },
      content: "첫 번째 포스트! #해시태그 #First!!!",
      Images: [
        {
          src: "https://i.pinimg.com/564x/60/30/fc/6030fca082167f3932af377cdb4f47bc.jpg",
        },
        {
          src: "https://i.pinimg.com/564x/60/30/fc/6030fca082167f3932af377cdb4f47bc.jpg",
        },
        
      ],
      Comment: [
        {
          User: {
            nickname: "son",
          },
          content: "우왓 아이묭!",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'; 
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) =>  ({
  type: ADD_POST_REQUEST,
  data
});

export const addComment = (data) =>  ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = { 
  id: 2,
  content: 'dummy data',
  User: {
    id: 1,
    nickname: "overloper"
  },
  Images: [],
  Comment: [],
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error
      }
      case ADD_COMMENT_REQUEST:
        return {
          ...state,
          addCommentLoading: true,
          addCommentDone: false,
          addCommentError: null,
        }
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          addCommentLoading: false,
          addCommentDone: true,
        }
      case ADD_COMMENT_FAILURE:
        return {
          ...state,
          addCommentLoading: false,
          addCommentError: action.error
        }
    default:
      return state;
  }
};

export default reducer;

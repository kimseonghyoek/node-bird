export const initalState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "overloper",
      },
      content: "첫 번째 포스트! #해시태그 #First!!!",
      Image: [
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
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST
}

const dummyPost = {
  id: 2,
  content: 'dummy data',
  User: {
    id: 1,
    nickname: "overloper"
  },
  Image: [],
  Comment: [],
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state;
  }
};

export default reducer;

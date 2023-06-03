const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const pofileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likeCount: 0,
    };

    state.posts.push(newPost);
    state.newPostText = '';
  } else if (action.type === UPDATE_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
};

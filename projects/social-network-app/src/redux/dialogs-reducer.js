const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessage;
  } else if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 4,
      message: state.newMessageText,
    };

    state.messages.push(newMessage);
    state.newMessage = '';
  }

  return state;
};

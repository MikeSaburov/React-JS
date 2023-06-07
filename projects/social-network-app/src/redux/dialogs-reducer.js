const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messages: [
    { id: '1', message: 'Hi props!!!' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'This is React baby!' },
  ],
  dialogs: [
    {
      id: '1',
      name: 'Mike',
      src: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
    },
    {
      id: '2',
      name: 'Goga',
      src: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png',
    },
    {
      id: '3',
      name: 'Roma',
      src: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-kot-v-kapyushone-s-raznym-czvetom-glaz.jpg',
    },
    {
      id: '4',
      name: 'Artem',
      src: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    },
    {
      id: '5',
      name: 'Vadik',
      src: 'https://static-cse.canva.com/blob/1051719/1600w-2so4RyuRmfc.jpg',
    },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessage = '';
      return state;
    default:
      return state;
  }
};

export const updateMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export const addMessageCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;

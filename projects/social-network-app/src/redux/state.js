const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
  rerenderEntireTree() {
    console.log('store update');
  },
  _state: {
    profilePage: {
      posts: [
        {
          id: '1',
          message:
            'JavaScript сохранил статус самого популярного языка программирования на GitHub в текущем году. Весь топ-5 языков остался неизменным с прошлого года, но PHP уступил шестую строчку – ее занял C++.',
          likeCount: 150,
        },
        {
          id: '2',
          message:
            'Mail.ru Group открыла набор на два бесплатных курса по Android- и iOS- разработке для студентов вузов Москвы и Санкт-Петербурга, сообщает пресс-служба компании.',
          likeCount: 50,
        },
        {
          id: '3',
          message:
            'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
          likeCount: 162,
        },
        {
          id: '4',
          message:
            'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
          likeCount: 485,
        },
      ],
      newPostText: '',
    },
    dialogPage: {
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
    },
    navbarPage: {
      friends: [
        {
          id: 1,
          name: 'Andrew',
          src: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg',
        },
        {
          id: 2,
          name: 'Vanya',
          src: 'https://shapka-youtube.ru/wp-content/uploads/2020/05/gangsta-skull.jpg',
        },
        {
          id: 3,
          name: 'Sveta',
          src: 'https://www.meme-arsenal.com/memes/581e1833e4b43d7fd6d4d672ab64d43c.jpg',
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this.rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageText = action.newMessage;
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.dialogPage.newMessageText,
      };

      this._state.dialogPage.messages.push(newMessage);
      this._state.profilePage.newMessage = '';
      this.rerenderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default store;

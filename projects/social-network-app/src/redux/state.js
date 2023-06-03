import pofileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';

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
    this._state.profilePage = pofileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
    this.rerenderEntireTree(this._state);
  },
};

export default store;

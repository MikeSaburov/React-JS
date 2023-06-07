const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
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
};

const pofileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };

      state.posts.push(newPost);

      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default pofileReducer;

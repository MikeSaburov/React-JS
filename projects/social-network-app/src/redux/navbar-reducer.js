let initialState = {
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
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;

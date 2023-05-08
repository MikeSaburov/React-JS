import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
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
];

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <br />
      <button>Add Post</button>
      <hr />
      <Post
        message={postsData[0].message}
        image="https://cs2.livemaster.ru/storage/3f/d1/b8020a152d3e02369b20a82e53uh--materialy-dlya-tvorchestva-avatarka.jpg"
        likeCount={postsData[0].likeCount}
      />
      <Post
        message={postsData[1].message}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyGzxYWrj2oU2vzckVxaD2IBCfvkzDh59XeQkf4RKHnUtbyAc-y789T3l8KKrTMhYfQs&usqp=CAU"
        likeCount={postsData[1].likeCount}
      />
    </div>
  );
};

export default MyPosts;

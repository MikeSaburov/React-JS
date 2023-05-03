import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h2>My Posts</h2>
      <div className="addPost">
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <br />
        <button>Add post</button>
        <hr />
      </div>
      <div className={s.posts}>
        <Post
          message="JavaScript сохранил статус самого популярного языка программирования на GitHub в текущем году. Весь топ-5 языков остался неизменным с прошлого года, но PHP уступил шестую строчку – ее занял C++."
          image="https://cs2.livemaster.ru/storage/3f/d1/b8020a152d3e02369b20a82e53uh--materialy-dlya-tvorchestva-avatarka.jpg"
          likeCount="150"
        />
        <Post
          message="Mail.ru Group открыла набор на два бесплатных курса по Android- и iOS- разработке для студентов вузов Москвы и Санкт-Петербурга, сообщает пресс-служба компании."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyGzxYWrj2oU2vzckVxaD2IBCfvkzDh59XeQkf4RKHnUtbyAc-y789T3l8KKrTMhYfQs&usqp=CAU"
          likeCount="50"
        />
      </div>
    </div>
  );
};

export default MyPosts;

import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <h2>My Posts</h2>
      <div className="addPost">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button>Add post</button>
        <hr />
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          <img
            src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            asperiores sequi expedita laborum ex mollitia esse, dolorem minima
            iusto cumque excepturi nulla error explicabo ratione enim quos,
            itaque repellendus nemo!
          </p>
        </div>
        <div className={s.item}>Post 2</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

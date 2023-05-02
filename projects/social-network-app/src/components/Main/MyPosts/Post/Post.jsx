import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores
        sequi expedita laborum ex mollitia esse, dolorem minima iusto cumque
        excepturi nulla error explicabo ratione enim quos, itaque repellendus
        nemo!
      </p>
    </div>
  );
};

export default Post;

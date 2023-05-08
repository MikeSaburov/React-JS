import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyGzxYWrj2oU2vzckVxaD2IBCfvkzDh59XeQkf4RKHnUtbyAc-y789T3l8KKrTMhYfQs&usqp=CAU"
        alt=""
        className={s.avatar}
      />{' '}
      <span>{`Likes: ${props.likeCount}`}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;

import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.image} alt="" className={s.avatar} />{' '}
      <span>{`Likes: ${props.likeCount}`}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;

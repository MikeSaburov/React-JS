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
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;

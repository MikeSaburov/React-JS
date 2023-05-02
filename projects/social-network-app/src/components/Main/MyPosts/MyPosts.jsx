import s from './MyPosts.module.css';
import Post from './Post/Post';

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
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;

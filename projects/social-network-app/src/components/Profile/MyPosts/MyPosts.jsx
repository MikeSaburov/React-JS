import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let posts = props.posts;
  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <br />
      <button>Add Post</button>
      <hr />
      {postsElements}
    </div>
  );
};

export default MyPosts;

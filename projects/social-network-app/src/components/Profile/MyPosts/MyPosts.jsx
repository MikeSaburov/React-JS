import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let click = () => {
    alert('You click button');
  };
  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <br />
      <button onClick={click}>Add Post</button>
      <hr />
      {postsElements}
    </div>
  );
};

export default MyPosts;

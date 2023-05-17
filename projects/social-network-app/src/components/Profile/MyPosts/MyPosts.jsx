import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea ref={newPostElement} name="post" cols="30" rows="5"></textarea>
      <br />
      <button onClick={addPost}>Add Post</button>
      <hr />
      {postsElements}
    </div>
  );
};

export default MyPosts;

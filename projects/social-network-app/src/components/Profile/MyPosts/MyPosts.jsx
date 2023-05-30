import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  };
};

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-POST-TEXT', newText: text };
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea ref={newPostElement} onChange={onChange}></textarea>
      <br />
      <button onClick={addPost}>Add Post</button>
      <hr />
      {postsElements}
    </div>
  );
};

export default MyPosts;

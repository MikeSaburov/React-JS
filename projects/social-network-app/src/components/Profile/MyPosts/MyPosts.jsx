import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h2>New Post</h2>
      <textarea ref={newPostElement} onChange={onChange}></textarea>
      <br />
      <button onClick={onAddPost}>Add Post</button>
      <hr />
      {postsElements}
    </div>
  );
};

export default MyPosts;

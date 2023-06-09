import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = '';
  };

  let onChange = (text) => {
    let action = updatePostTextActionCreator(text);
    props.dispatch(action);
  };

  return <MyPosts updateNewPostText={onChange} addPost={addPost} />;
};

export default MyPostsContainer;

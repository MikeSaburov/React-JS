import React from 'react';
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
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

// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo />
      <MyPosts
        posts={props.profileState.posts}
        dispatch={props.dispatch}
        // newPostText={props.newPostText}
        // updateNewPostText={props.updateNewPostText}
      />
    </content>
  );
};

export default Profile;

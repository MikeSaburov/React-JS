// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <content>
      <ProfileInfo />
      <MyPosts posts={props.localState.posts} addPost={props.addPost} />
    </content>
  );
};

export default Profile;

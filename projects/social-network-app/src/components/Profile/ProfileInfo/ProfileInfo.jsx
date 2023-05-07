import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://www.freewebheaders.com/wp-content/gallery/space-size-800x200/night-planets-header-8825-header-banner_size-800x200.jpg"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>Ava + discriptoin</div>
      <hr />
    </div>
  );
};

export default ProfileInfo;

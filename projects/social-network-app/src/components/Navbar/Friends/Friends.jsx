import s from './Friends.module.css';

const Friends = (props) => {
  return (
    <div>
      <img className={s.image} src={props.src} alt="" />
    </div>
  );
};

export default Friends;

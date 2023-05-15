import s from './Friends.module.css';

const Friends = (props) => {
  return (
    <div>
      <img className={s.image} src={props.src} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default Friends;

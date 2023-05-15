import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.leftBlock}>
        <div className={s.messageLeft}>{props.message}</div>
      </div>

      <div className={s.rightBlock}>
        <div className={s.messageRight}>{props.message}</div>
      </div>
    </div>
  );
};

export default Message;

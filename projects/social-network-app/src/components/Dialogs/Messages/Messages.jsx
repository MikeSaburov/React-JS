import s from './../Dialogs.module.css';

const Messages = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

export default Messages;

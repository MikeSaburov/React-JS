import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.messages}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Mike" id="1"></DialogItem>
        <DialogItem name="Goga" id="2"></DialogItem>
        <DialogItem name="Roma" id="3"></DialogItem>
        <DialogItem name="Artem" id="4"></DialogItem>
        <DialogItem name="Vadik" id="5"></DialogItem>
      </div>
      <div className={s.messagesItems}>
        <Message message="Hi props !!!"></Message>
        <Message message="How are you ?"></Message>
        <Message message="This is React baby!"></Message>
      </div>
    </div>
  );
};

export default Dialogs;

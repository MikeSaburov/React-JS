import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
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
        <div className={s.messages}>Hi</div>
        <div className={s.messages}>How are you</div>
        <div className={s.messages}>This is React baby!</div>
      </div>
    </div>
  );
};

export default Dialogs;

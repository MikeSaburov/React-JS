import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialog = (props) => {
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
        <Dialog name="Mike" id="1"></Dialog>
        <Dialog name="Goga" id="2"></Dialog>
        <Dialog name="Roma" id="3"></Dialog>
        <Dialog name="Artem" id="4"></Dialog>
        <Dialog name="Vadik" id="5"></Dialog>
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

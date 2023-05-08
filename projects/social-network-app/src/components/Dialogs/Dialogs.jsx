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

let dialogsData = [
  { id: '1', name: 'Mike' },
  { id: '2', name: 'Goga' },
  { id: '3', name: 'Roma' },
  { id: '4', name: 'Artem' },
  { id: '5', name: 'Vadik' },
  { id: '6', name: 'Igor' },
];

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Mike" id="1" />
        <DialogItem name="Goga" id="2" />
        <DialogItem name="Roma" id="3" />
        <DialogItem name="Artem" id="4" />
        <DialogItem name="Vadik" id="5" />
      </div>
      <div className={s.messagesItems}>
        <Message message="Hi props!!!" />
        <Message message="How are you?" />
        <Message message="This is React baby!" />
      </div>
    </div>
  );
};

export default Dialogs;

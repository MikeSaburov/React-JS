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

let messagesData = [
  { id: '1', message: 'Hi props!!!' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'This is React baby!' },
];

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messagesItems}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
      ы
    </div>
  );
};

export default Dialogs;

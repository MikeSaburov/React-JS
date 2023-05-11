import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

// let dialogsData = [
//   { id: '1', name: 'Mike' },
//   { id: '2', name: 'Goga' },
//   { id: '3', name: 'Roma' },
//   { id: '4', name: 'Artem' },
//   { id: '5', name: 'Vadik' },
//   { id: '6', name: 'Igor' },
//   { id: '7', name: 'Ivan' },
// ];

// let messagesData = [
//   { id: '1', message: 'Hi props!!!' },
//   { id: '2', message: 'How are you?' },
//   { id: '3', message: 'This is React baby!' },
// ];

// let dialogsElemes = dialogsData.map((d) => (
//   <DialogItem name={d.name} id={d.id} />
// ));

// let messageElements = messagesData.map((m) => <Message message={m.message} />);

const Dialogs = (props) => {
  console.log(props);
  let dialogs = props.dialog;
  let messages = props.message;

  let dialogsElemes = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElemes}</div>
      <div className={s.messages}> {messageElements}</div>
    </div>
  );
};

export default Dialogs;

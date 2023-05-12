import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogs = props.localState.dialogs;
  let messages = props.localState.messages;

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

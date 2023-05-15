import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogs = props.localState.dialogs;
  let messages = props.localState.messages;

  let dialogsElemes = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.src} />
  ));

  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div> {dialogsElemes}</div>
      <div> {messageElements}</div>
    </div>
  );
};

export default Dialogs;

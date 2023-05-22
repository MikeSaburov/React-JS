import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElemes = props.localState.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.src} />
  ));

  let messageElements = props.localState.messages.map((m) => (
    <Message message={m.message} />
  ));

  let textMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = () => {
    let messageValue = textMessage.current.value;
    props.updateNewMessageText(messageValue);
  };
  return (
    <div className={s.dialogs}>
      <div> {dialogsElemes}</div>
      <div>
        <div>{messageElements}</div>
        <div className={s.addMessageBlock}>
          <textarea
            ref={textMessage}
            onChange={onChangeMessage}
            cols="50"
            rows="2"
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

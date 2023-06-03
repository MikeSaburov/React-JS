import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {
  updateMessageTextCreator,
  addMessageCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let dialogsElements = props.localState.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.src} />
  ));

  let messageElements = props.localState.messages.map((m) => (
    <Message message={m.message} />
  ));

  let textMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onChangeMessage = (e) => {
    let messageValue = e.target.value;
    props.dispatch(updateMessageTextCreator(messageValue));
  };
  return (
    <div className={s.dialogs}>
      <div> {dialogsElements}</div>
      <div>
        <div>{messageElements}</div>
        <div className={s.addMessageBlock}>
          <textarea
            ref={textMessage}
            onChange={onChangeMessage}
            cols="50"
            rows="2"
            placeholder="Enter your message"
          ></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

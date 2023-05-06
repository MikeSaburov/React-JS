import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>MIke</div>
        <div className={s.dialog}>Goga</div>
        <div className={s.dialog}>Rome</div>
        <div className={s.dialog}>Artem</div>
        <div className={s.dialog}>Vadik</div>
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

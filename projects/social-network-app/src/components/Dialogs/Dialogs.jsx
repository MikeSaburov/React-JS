import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/1">MIke</NavLink>{' '}
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Goga</NavLink>
        </div>
        <div className={s.dialog}>Roma</div>
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

import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialogsItems}>
      <img className={s.image} src={props.img} alt="" />
      <NavLink className={s.autor} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

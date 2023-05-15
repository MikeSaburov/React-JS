import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className={s.aside}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.activeLink : '')}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.activeLink : '')}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.activeLink : '')}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.activeLink : '')}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="settings"
          className={(navData) => (navData.isActive ? s.activeLink : '')}
        >
          Settings
        </NavLink>
      </div>

      <div className={s.friendsBlock}></div>
    </aside>
  );
};

export default Navbar;

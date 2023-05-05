import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className={s.aside}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Navbar;

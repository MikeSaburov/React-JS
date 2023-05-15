import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  let frindsElement = props.localState.friends.map((i) => (
    <Friends src={i.src} />
  ));
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

      <div>
        <h1>Friends</h1>
        <div className={s.avaBlock}> {frindsElement}</div>
      </div>
    </aside>
  );
};

export default Navbar;

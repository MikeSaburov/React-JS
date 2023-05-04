import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className={s.aside}>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/dialogs">Messages</Link>
      </div>
      <div>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/music">Music</Link>
      </div>
      <div>
        <Link to="settings">Settings</Link>
      </div>
    </aside>
  );
};

export default Navbar;

import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={s.aside}>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </aside>
  );
};

export default Navbar;

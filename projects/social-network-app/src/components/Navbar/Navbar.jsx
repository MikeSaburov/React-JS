import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={s.aside}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <a href="/news">News</a>
      </div>
      <div>
        <a href="/music">Music</a>
      </div>
      <div>
        <a href="settings">Settings</a>
      </div>
    </aside>
  );
};

export default Navbar;

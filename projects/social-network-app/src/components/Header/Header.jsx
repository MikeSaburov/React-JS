import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.image_block}>
        <img
          src="https://img.freepik.com/free-vector/flat-code-logo-collection_23-2148829940.jpg?w=2000"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;

import s from './Main.module.css';
import MyPosts from './MyPosts/MyPosts';

const Main = () => {
  return (
    <main className={s.main}>
      <MyPosts />
    </main>
  );
};

export default Main;

//import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technology />
    </div>
  );
};

const Technology = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>js</li>
        <li>css</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#1">Link-1</a>
      <a href="#2">Link-2</a>
      <a href="#3">Link-3</a>
    </div>
  );
};

export default App;

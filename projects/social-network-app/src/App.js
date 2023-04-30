import Header from './components/Header.jsx';
import './App.css';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <main className="main"></main>
    </div>
  );
}

export default App;

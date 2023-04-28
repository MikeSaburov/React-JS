import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header"> Header </header>
      <aside className="aside">
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
      <main className="main"></main>
    </div>
  );
}

export default App;

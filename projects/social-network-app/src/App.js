import Header from './components/Header/Header';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Doalogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Doalogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default App;

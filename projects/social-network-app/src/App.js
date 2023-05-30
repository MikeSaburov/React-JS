import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar localState={props.appState.navbarPage} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  localState={props.appState.dialogPage}
                  addMessage={props.addMessage}
                  newMessageText={props.appState.dialogPage.newMessageText}
                  updateNewMessageText={props.updateNewMessageText}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profileState={props.appState.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

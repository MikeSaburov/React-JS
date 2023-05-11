import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: '1', name: 'Mike' },
  { id: '2', name: 'Goga' },
  { id: '3', name: 'Roma' },
  { id: '4', name: 'Artem' },
  { id: '5', name: 'Vadik' },
  { id: '6', name: 'Igor' },
  { id: '7', name: 'Ivan' },
];

let messagesData = [
  { id: '1', message: 'Hi props!!!' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'This is React baby!' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} message={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

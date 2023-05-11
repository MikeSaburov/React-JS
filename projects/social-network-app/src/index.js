import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Массив Диалогов
let dialogsData = [
  { id: '1', name: 'Mike' },
  { id: '2', name: 'Goga' },
  { id: '3', name: 'Roma' },
  { id: '4', name: 'Artem' },
  { id: '5', name: 'Vadik' },
  { id: '6', name: 'Igor' },
  { id: '7', name: 'Ivan' },
];

// Массив Сообщений
let messagesData = [
  { id: '1', message: 'Hi props!!!' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'This is React baby!' },
];

// Массив Постов
let postsData = [
  {
    id: '1',
    message:
      'JavaScript сохранил статус самого популярного языка программирования на GitHub в текущем году. Весь топ-5 языков остался неизменным с прошлого года, но PHP уступил шестую строчку – ее занял C++.',
    likeCount: 150,
  },
  {
    id: '2',
    message:
      'Mail.ru Group открыла набор на два бесплатных курса по Android- и iOS- разработке для студентов вузов Москвы и Санкт-Петербурга, сообщает пресс-служба компании.',
    likeCount: 50,
  },
  {
    id: '3',
    message:
      'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
    likeCount: 162,
  },
  {
    id: '4',
    message:
      'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
    likeCount: 485,
  },
  {
    id: '5',
    message:
      'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
    likeCount: 1550,
  },
  {
    id: '6',
    message:
      'Продажи ноутбуков в России сокращаются, так, в I квартале по сравнению с тем же периодом 2022 года они сократились примерно на 20%: сказался ажиотажный спрос на технику во время пандемии и в начале прошлого года.',
    likeCount: 20,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} message={messagesData} posts={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { legacy_createStore as createStore, combineReducers } from 'redux';
import pofileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';

let redusers = combineReducers({
  // здесь необходимо понимать что ключ это то что хранится в state, а значение это тот reducer который за этот state отвечает
  pofileReducer,
  dialogsReducer,
  navbarReducer,
});

let store = createStore();

export default store;

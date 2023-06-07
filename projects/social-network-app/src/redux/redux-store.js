import { legacy_createStore as createStore, combineReducers } from 'redux';
import pofileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';

let redusers = combineReducers({
  pofileReducer,
  dialogsReducer,
  navbarReducer,
});

let store = createStore();

export default store;

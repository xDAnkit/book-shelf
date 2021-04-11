import { combineReducers } from 'redux';

// Books
import bookList from '@features/Books/List/reducer';

const AppReducer = combineReducers({
  bookList
});

export default AppReducer;

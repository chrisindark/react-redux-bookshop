import { combineReducers } from 'redux';

import {booksReducer, bookReducer} from './bookReducers';


export default combineReducers({
    books: booksReducer,
    // More reducers if there are, can go here
    book: bookReducer,
});

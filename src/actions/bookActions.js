import Axios from 'axios';

import * as actionTypes from './actionTypes';


export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books: books
    }
};

export const fetchBooks = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get('')
            .then(res => {
                dispatch(fetchBooksSuccess(res.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

// Sync Action
export const fetchBookByIdSuccess = (book) => {
    return {
        type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
        book: book
    }
};
// Async Action
export const fetchBookById = (bookId) => {
    return (dispatch) => {
        return Axios.get(bookId + '/')
            .then(response => {
                // Handle data with sync action
                dispatch(fetchBookByIdSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBook = (book) => {
    return {
        type: 'CREATE_BOOK',
        book: book
    }
};

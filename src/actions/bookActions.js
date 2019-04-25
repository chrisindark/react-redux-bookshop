import Axios from 'axios';

import * as actionTypes from './actionTypes';


const apiUrl = 'https://ancient-tor-16694.herokuapp.com/api/v1/posts/';

//Sync Action
export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books: books
    }
};

//Async Action
export const fetchBooks = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl)
            .then(res => {
                // Dispatch another action to consume data
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
        return Axios.get(apiUrl + bookId + '/')
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
    // Return action
    return {
        // Unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book: book
    }
};

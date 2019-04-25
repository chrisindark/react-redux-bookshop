import * as actionTypes from '../actions/actionTypes';


export const booksReducer = (state = [], action) => {
    // console.log(action, state);
    switch (action.type) {
        // Check if action dispatched is
        case 'FETCH_BOOKS_SUCCESS':
            return { ...state, books: action.books };
        // CREATE_BOOK and act on that
        case 'CREATE_BOOK':
            return [...state, Object.assign({}, action.book)];
        default:
            return state;
    }
};

// For handling a single book
export const bookReducer = (state = {}, action) => {
    switch (action.type) {
        // Handle fetch by Id
        case actionTypes.FETCH_BOOK_BY_ID_SUCCESS:
            return action.book;
        default:
            return state;
    }
};

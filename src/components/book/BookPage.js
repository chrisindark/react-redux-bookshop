import React from 'react';
import { connect } from 'react-redux';

import * as bookActions from '../../actions/bookActions';


class Book extends React.Component {
    constructor(props) {
        // Pass props back to parent
        super(props);
    }

    componentWillMount() {
        console.log(this.props.books);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.books) {
            console.log(nextProps.books);
        }
    }

    // Submit book handler
    submitBook(input) {
        console.log('Submitted');
    }

    render() {
        // Title input tracker
        let titleInput;
        // return JSX
        return(
            <div>
                <h3>Books</h3>
                <ul>
                    {/* Traverse books array  */}
                    {this.props.books.results && this.props.books.results.map((b, i) => <li key={i}>{b.title}</li> )}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={e => {
                        // Prevent request
                        e.preventDefault();
                        // Assemble inputs
                        const input = {title: titleInput.value};
                        // Call handler
                        this.submitBook(input);
                        // Reset form
                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node}/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        books: state.books
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(bookActions.fetchBooks()),
        // You can now say this.props.createBook
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);

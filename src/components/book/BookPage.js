import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as bookActions from '../../actions/bookActions';


class Book extends Component {
    constructor(props) {
        super(props);

        this.titleInput = null;
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
        console.log('Submitted', input);
        this.props.createBook(input);
    }

    onSubmitCallback = (e) => {
        e.preventDefault();
        const input = {title: this.titleInput.value};
        this.submitBook(input);
        e.target.reset();
    }

    render() {
        return(
            <div>
                <h3>Books</h3>
                <ul>
                    {this.props.books && this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
                </ul>
                <div>
                    <h3>Books Form</h3>
                    <form onSubmit={this.onSubmitCallback}>
                        <input type="text" name="title" ref={node => this.titleInput = node}/>
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
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);

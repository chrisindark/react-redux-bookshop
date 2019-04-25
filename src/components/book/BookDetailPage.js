import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as bookActions from '../../actions/bookActions';
import BookDetails from './BookDetails';


class BookDetailPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        this.props.fetchBookById(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <BookDetails book={this.props.book}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailPage);

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../actions/index';
import { bindActionCreators } from 'redux'

import Card from './Card';
import Preloader from './Preloader';

class BooksPage extends Component {

    componentDidMount() {
        this.props.getBooks(); 
    }

    render() {
        console.log('data:::', this.props.books.books);
        let { books } = this.props.books;
        let renderCard = books.map((item) => (
            <Card key={item.id} {...item} />
        ));

        return (
            <div className="books-page page-container">
                <div className="container">
                    <div className="row">
                        { books.length > 0 ? renderCard : <Preloader />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
      books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getBooks: bindActionCreators(getBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
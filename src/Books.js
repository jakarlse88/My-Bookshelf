/* render book info from API */
import React, { Component } from 'react';

class Books extends Component {
    state = {};

    // Implement changeShelf here
    changeShelf = () => {
        // booksAPI.update
        // Call this.props.updateMain to force an update
    }
    

    render() {
        return (
            <div className="book-container">
                <div className="book-details">
                    {/* props: pass API data into component */}
                    <img src={this.props.book.imageLinks.thumbnail} alt={`book cover of ${this.props.book.title}`} />
                    <p>Book Title: {this.props.book.title}. {this.props.book.subtitle}</p>
                    <p>Written By: {this.props.book.authors}</p>
                </div>
                {/* when select an option, update the book accordingly */}
                {/* <ChangeShelf /> */}
                <select value="move" onChange={this.changeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentReads">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove this Book</option>
                </select>
            </div>
        )
    }
}

export default Books;
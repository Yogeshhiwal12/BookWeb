import React, { useState } from "react";
import "./BookList.css";

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const limitDescription = (description) => {
    const maxLength = 100;
    if (!description) return "";
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  };

  const limitAuthors = (authors) => {
    const maxLength = 50;
    if (!authors) return "";
    const truncatedAuthors = authors.map((author) => {
      if (author.length <= maxLength) {
        return author;
      }
      return author.substring(0, maxLength) + "...";
    });
    return truncatedAuthors.join(", ");
  };

  const openPopup = (book) => {
    setSelectedBook(book);
  };

  const closePopup = () => {
    setSelectedBook(null);
  };

  return (
    <div className="book-list-container">
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div className="book-info">
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                </div>
                <div>
                  <h2 className="book-title">{book.volumeInfo.title}</h2>
                  <p className="book-author">By: {limitAuthors(book.volumeInfo.authors)}</p>
                </div>
              </div>
              <p className="book-description">{limitDescription(book.volumeInfo.description)}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="book-rating">Rating: {book.volumeInfo.averageRating}</p>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "8px 15px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1 rem",
                    borderRadius: "4px",
                  }}
                  onClick={() => openPopup(book)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedBook && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={closePopup}>
                &times;
              </span>
              <div>
                <img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} />
                <h1 className="book-title">{selectedBook.volumeInfo.title}</h1>
                <p className="book-author">By: {limitAuthors(selectedBook.volumeInfo.authors)}</p>
                <p className="book-description">{selectedBook.volumeInfo.description}</p>
                <p className="book-rating">Rating: {selectedBook.volumeInfo.averageRating}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;

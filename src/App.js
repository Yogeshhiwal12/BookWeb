import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import Filter from './Filter';
import "./App.css"

const App = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filterType, setFilterType] = useState('title');

  useEffect(() => {
    fetch('https://d1krvzwx5oquy1.cloudfront.net/books.json')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilter = (type, value) => {
    setFilterType(type);
    setFilterValue(value);

    let filtered;
    if (type === 'title') {
      filtered = books.filter((book) => book.volumeInfo.title.toLowerCase().includes(value.toLowerCase()));
    } else if (type === 'author') {
      filtered = books.filter((book) => book.volumeInfo.authors && book.volumeInfo.authors.some((author) => author.toLowerCase().includes(value.toLowerCase())));
    } else {
      filtered = books;
    }
    setFilteredBooks(filtered);
  };



  return (
    <div className="container">
      <h1>Book Buying E-commerce Web</h1>
      <Filter handleFilter={handleFilter} />
      {filteredBooks.length ? (
        <BookList books={filteredBooks} />
      ) : (
        <p className="no-books">No books found. Try a different filter.</p>
      )}

    </div>
  );
};

export default App;

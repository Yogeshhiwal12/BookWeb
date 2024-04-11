Book Buying E-commerce Web
Welcome to the Book Buying E-commerce Web project! This is a simple web application built with React that allows users to browse a collection of books fetched from an external API. Users can filter these books by title or author, view book details, and clear filters as needed.

Setup Instructions
To set up and run this project locally, follow these steps:

1. Clone the Repository
   git clone https://github.comYogeshhiwal12/BookWeb.git

2. Navigate to the Project Directory
   cd BookWeb

3. Install Dependencies
   Make sure you have Node.js and npm installed on your machine. Then, run:
   npm install

4. Run the Application
   After installing the dependencies, you can start the development server:
   npm start
   This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

Design Choices:
1. CSS Design (App.css, BookList.css)
Box Model Reset: The CSS includes a basic box model reset (box-sizing, margin, padding) for consistent styling.
Container: The main content is placed within a centered container (max-width: 1200px) for better readability.
Typography: Uses Arial, sans-serif as the primary font for better cross-browser compatibility.
Color Scheme: Utilizes a simple color scheme (#333, #007bff, #0056b3, #f4f4f4, etc.) for a clean and professional look.
Responsive Design: The design is not explicitly mentioned as responsive in the provided code. For a production-ready application, media queries and responsive design considerations would be essential.
React Components (App.js, BookList.jsx, Filter.jsx)
App Component:

Fetches book data from an external API (https://d1krvzwx5oquy1.cloudfront.net/books.json) using fetch and sets the initial state.
Includes a Filter component to filter books by title or author.
Renders the BookList component based on the filtered books or displays a message if no books match the filter.
BookList Component:

Displays a list of books with their titles, authors, descriptions (truncated), ratings, and a "Details" button.
Clicking the "Details" button opens a popup with more detailed information about the selected book.
Utilizes a simple grid layout with CSS for book items.
Filter Component:

Allows users to select a filter type (title or author) and enter a filter value (text input).
Submits the filter on button click, updating the list of books based on the filter criteria.
Includes a "Clear Filter" button to reset the filter.
Popup for Book Details
Popup Design:
When a user clicks on the "Details" button for a book, a popup modal appears with the book's image, title, author(s), description, and rating.
This provides a clean and non-intrusive way to display additional information without navigating away from the main page.
These design choices aim to create a user-friendly and visually appealing web application for browsing and exploring books. The use of React components allows for modularity and reusability, enhancing the maintainability of the codebase.

import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    const fetchBooks =async()=>{
      const response = await fetch(
          "https://stark-spire-22280.herokuapp.com/api/books"
      );
      const json= await response.json();
      console.log('json',json);
      setBooks(json.data);
      return json;
    };
    fetchBooks();
  },[]);
  return (
      <>
        <h1>Lista de libros</h1>
        <ul>
          {books.map((book) => (
              <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </>
  );
}

export default App;

import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "../hooks/useBookSearch";
import "../App.css";

export default function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(5, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="App">
      <div className="App-dashboard">
        {books.map((book, index) => (
          <div ref={lastBookElementRef} key={book.email} className="card">
            <img
              style={{
                borderRadius: "50%",
                height: "100%",
              }}
              src={book.picture.large}
              alt={book.name.first}
            />
            <div>
              <h3>{book.name.first}</h3>
            </div>
          </div>
        ))}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/book")
      .then((response) => {
        console.log("API Response:", response.data); // Log the API response
        if (response.data && Array.isArray(response.data)) {
          setBooks(response.data);
          localStorage.setItem("books", JSON.stringify(response.data)); // Save books to localStorage
        } else {
          console.error("Unexpected response data format:", response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  console.log("Books state:", books);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <>
   
<div className="w-full h-full p-4 overflow-hidden">
      <div className="w-full h-full bg-gray-100 border border-black">
        <div className="container px-4 py-8 mx-auto">
          <nav className="flex justify-between mb-5 m-h-nav">
            <div className="items-center mt-2 text-lg m-h-search">
              <input
                type="text"
                id="searchInput"
                name="searchInput"
                placeholder="Search Book..."
                className="w-full max-w-xs p-2 pl-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mt-2 ml-4 m-h-select">
              <select
                name="courses-level"
                id="courses-level"
                className="p-2 text-lg border border-gray-300 rounded-md"
              >
                <option value="College">College</option>
                <option value="CASS">CASS</option>
                <option value="CCS">CCS</option>
                <option value="CRIM">CRIM</option>
                <option value="COMENG">ComEng</option>
                <option value="NURSING">Nursing</option>
              </select>
            </div>
          </nav>
          <div>
            <p className="pl-4 mb-5 text-lg font-semibold text-gray-700 underline decoration-solid">
              CCS
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="p-4 transition-shadow duration-300 bg-gray-300 rounded-lg shadow-md book-item hover:shadow-lg hover:scale-105"
              >
                <img
                  src={`/${book.image}`} // Direct path to public folder
                  alt={book.title}
                  className="object-cover w-auto h-40 mb-4 rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default.png"; // Fallback image in public folder
                  }}
                />
                <button
                  className="px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => navigate(`/viewbook/${book.id}`)} // Navigate to the book details page
                >
                  View Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookList;
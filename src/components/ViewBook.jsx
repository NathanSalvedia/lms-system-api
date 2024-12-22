import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { useParams } from 'react-router-dom';
import axios from '../api/axios'; // Adjust import as necessary

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null); // Book details
  const [user_id, setUserId] = useState(null); // User ID
  const [book_id, setBookId] = useState(null);
  const [error, setError] = useState(null); // Error state
  const [isRequesting, setIsRequesting] = useState(false); // Request state

  // Retrieve user details from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserId(user.id);
    }
  }, []);

  // Fetch book details based on the book ID from route params
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/book/${id}`);
        if (response.data) {
          setBook(response.data);
          setBookId(response.data.id); // Set the book_id from the response data
        } else {
          setError("Book not found.");
        }
      } catch (e) {
        setError(e.message || "Error fetching book details.");
      }
    };

    fetchBook();
  }, [id]);

  // Handle book request submission
  const handleRequestBook = async (e) => {
    e.preventDefault();

    if (!book_id || !user_id) {
      setError("User or book information is missing.");
      return;
    }

    setIsRequesting(true); // Disable the button while processing

    const requestData = {
      user_id,
      book_id, // Use the ID directly from the book object
    };

    try {
      const response = await axios.post("/add-transaction", requestData);
      setIsRequesting(false); // Re-enable the button after completion

      if (response.status === 200) {
        alert(response.data.message); // Notify the user of success

        // Save the request to localStorage with status "Pending"
        const requests = JSON.parse(localStorage.getItem("requests")) || [];
        requests.push({
          bookTitle: book.title,
          bookId: book_id,
          status: "Pending",
        });
        localStorage.setItem("requests", JSON.stringify(requests));
      } else {
        setError(response.data.message || "Unexpected error occurred.");
      }
    } catch (e) {
      setError(e.message || "Error requesting the book.");
      setIsRequesting(false); // Re-enable the button in case of error
    }
  };

  // Handle UI while loading, errors, or displaying book details
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container p-4 mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center w-full">
            <img
              src={`/${book.image}`}
              alt={book.title}
              className="object-cover w-auto h-64 mt-4 mb-4 rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default.png"; // Fallback image
              }}
            />
          </div>
          <div className="flex items-center justify-center w-full text-center">
            <h1 className="text-3xl font-bold">{book.title}</h1>
          </div>
        </div>
        <hr className="my-4 border border-black" />
        <div className="mt-4">
          <p className="text-xl">ISBN: {book.isbn}</p>
          <p className="text-xl">{book.description}</p>
          <p className="text-xl font-semibold">Author: {book.author}</p>
          <p className="text-xl font-semibold">Edition: {book.edition}</p>
          <p className="text-xl font-semibold">Published: {book.publishYear}</p>
          <p className="text-xl font-semibold">Quantity Available: {book.quantity}</p>
        </div>

        {book.quantity >= 1 ? (
          <form method="POST" onSubmit={handleRequestBook}>
            <button
              type="submit"
              className={`w-full px-4 py-2 mt-4 text-2xl text-white rounded-md ${
                isRequesting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              disabled={isRequesting}
            >
              {isRequesting ? "Requesting..." : "Request Book"}
            </button>
          </form>
        ) : (
          <button className="w-full px-4 py-2 mt-4 text-white bg-gray-400 rounded-md cursor-not-allowed">
            No Available Books
          </button>
        )}
      </div>
    </>
  );
};

export default ViewBook;
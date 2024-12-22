import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const [error, setError] = useState(null); // For handling any errors
  const [totalBooks, setTotalBooks] = useState(0); // To store the total number of books
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetching books data from localStorage when the component mounts
    const fetchBooks = async () => {
      try {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        if (storedBooks.length > 0) {
          setTotalBooks(storedBooks.length); // Set the total count of books
        } else {
          setError('No books data found in localStorage');
        }
      } catch (e) {
        setError('Failed to fetch books from localStorage');
        console.error(e); // Log the error for debugging purposes
      }
    };

    fetchBooks(); // Call the fetchBooks function when the component mounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Display error message if any
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="container p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Card for Total Books */}
          <div className="p-6 text-white bg-red-900 shadow-md">
            <h3 className="text-xl font-semibold">Total Books</h3>
            <p className="mt-4 text-2xl font-bold text-center">{totalBooks}</p>
          </div>
        </div>
        {/* Card for View Books Button */}
        <button 
          className="w-full px-4 py-2 mt-3 font-semibold text-white bg-gray-400 hover:bg-red-800"
          onClick={() => navigate('/booklist')} // Navigate to the book list page
        >
          View Books
        </button>
      </div>
      <div className="container p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Card for Total Requests Books */}
          <div className="p-6 text-white bg-red-900 shadow-md">
            <h3 className="text-xl font-semibold">Total Requests Books</h3>
            <p className="mt-4 text-2xl font-bold text-center">{totalBooks}</p>
          </div>
        </div>
        {/* Card for View Requests Button */}
        <button 
          className="w-full px-4 py-2 mt-3 font-semibold text-white bg-gray-400 hover:bg-red-800"
          onClick={() => navigate('/action')} // Navigate to the requests page
        >
          View Requests
        </button>
      </div>
      <div className="container p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Card for Total Return Books */}
          <div className="p-6 text-white bg-red-900 shadow-md">
            <h3 className="text-xl font-semibold">Total Return Books</h3>
            <p className="mt-4 text-2xl font-bold text-center">{totalBooks}</p>
          </div>
        </div>
        {/* Card for View Return Button */}
        <button 
          className="w-full px-4 py-2 mt-3 font-semibold text-white bg-gray-400 hover:bg-red-800"
          onClick={() => navigate('/returns')} // Navigate to the returns page
        >
          View Return
        </button>
      </div>
    </>
  );
};

export default Dashboard;
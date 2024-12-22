import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const Action = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(storedRequests);
  }, []);

  const handleDelete = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
    localStorage.setItem("requests", JSON.stringify(updatedRequests));
  };

  const handleAgree = (index) => {
    const updatedRequests = requests.map((request, i) => {
      if (i === index) {
        return { ...request, status: 'Approved' };
      }
      return request;
    });
    setRequests(updatedRequests);
    localStorage.setItem("requests", JSON.stringify(updatedRequests));
  };

  return (
    <>
      <Navigation />
      <div>
        <main className="p-4">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 text-lg text-white border bg-red-950">No.</th>
                <th className="px-4 py-2 text-lg text-white border bg-red-950">Title</th>
                <th className="px-4 py-2 text-lg text-white border bg-red-950">Status</th>
                <th className="px-4 py-2 text-lg text-white border bg-red-950">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-lg border">{index + 1}</td>
                    <td className="px-4 py-2 text-lg border">{request.bookTitle}</td>
                    <td className="px-4 py-2 text-lg border">{request.status}</td>
                    <td className="px-4 py-2 text-lg border">
                      <button 
                        className="px-2 py-1 mr-2 text-white bg-red-500 rounded" 
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button 
                        className="px-2 py-1 text-white bg-green-500 rounded" 
                        onClick={() => handleAgree(index)}
                        disabled={request.status === 'Approved'}
                      >
                        Agree
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 text-lg border" colSpan="4">No requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default Action;
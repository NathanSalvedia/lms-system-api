import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const RequestBook = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(storedRequests);
  }, []);

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
                <th className="px-4 py-2 text-lg text-white border bg-red-950">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-lg border">{index + 1}</td>
                    <td className="px-4 py-2 text-lg border">{request.bookTitle}</td>
                    <td className="px-4 py-2 text-lg border">{request.status}</td>
                    <td className="px-4 py-2 text-lg border"><button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Return</button> <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Decline</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 text-lg border" colSpan="3">No requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default RequestBook;
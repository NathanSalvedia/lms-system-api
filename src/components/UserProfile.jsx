import Navigation from './Navigation';


const UserProfile = () => {

  return (
   <>
   <Navigation></Navigation>
   <div className="flex items-center justify-center min-h-screen p-6 bg-white bg-gradient-to-r">
        <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg ">
          <div className="p-8 pt-28">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">User Profile</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600" htmlFor="userType">User Type:</label>
                  <input
                    type="text"
                    id="userType"
                    name="userType"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter user type"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600" htmlFor="uniqueId">Unique ID:</label>
                  <input
                    type="text"
                    id="uniqueId"
                    name="uniqueId"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter unique ID"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600" htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600" htmlFor="course">Course:</label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter course"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600" htmlFor="department">Department:</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter department"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>

  );

};



export default UserProfile
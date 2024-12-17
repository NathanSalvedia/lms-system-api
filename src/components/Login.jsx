import logo from '.././img/logo.png';


const Login = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-10 flex flex-col items-center h-screen overflow-hidden w-96 bg-maroon bg-red-950">
        <img src={logo} alt="Logo" className="m-8 bg-white rounded-full w-52 h-52" />
        <form action="../frontend/dashboard.html" className="flex flex-col items-center">
          <div className="relative w-64 mb-5">
            <input
              type="text"
              name="user_id"
              id="user_id"
              placeholder="ID number"
              className="w-11/12 h-10 pl-10 text-sm placeholder-gray-500 bg-gray-300 border-none rounded-sm outline-none"
            />
          </div>
          <div className="relative w-64 mb-5">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-11/12 h-10 pl-10 text-sm placeholder-gray-500 bg-gray-300 border-none rounded-sm outline-none"
            />
          </div>
          <button className="w-24 h-8 mt-4 text-sm font-bold text-white transition duration-200 bg-green-600 rounded-sm hover:bg-green-700">
            Sign in
          </button>
        </form>
        <div className="flex flex-col items-center pt-12 mt-10 border-t-2 border-white">
          <a href="#" className="text-lg font-normal text-white">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-screen overflow-hidden bg-white">
    
      </div>
    </div>
  );
};

export default Login;

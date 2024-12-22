import { useState } from "react";
import axios from "../api/axios";
import logo from "../img/logo.png";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import user from "../img/user.png";
import passwordIcon from "../img/passwordIcon.png";
import { useNavigate } from "react-router-dom";

const images = [p1, p2, p3];

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        unique_id: userId,
        password: password,
      });

      const { token, message, user } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user)); 

      setSuccess(message || "Login successful!");
      setError(""); 
      console.log("Response:", response.data);

      if (user.usertype === "librarian") {
        navigate("/dashboard");
      } else if (user.usertype === "student" || user.usertype === "faculty") {
        navigate("/homepage");
      } else {
        setError("Invalid role.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid login credentials.");
      setSuccess("");
      console.error("Login error:", err);
    }
  };

  return (
    <div>
      {/* Login Section */}
      <div className="fixed top-0 left-0 z-10 flex flex-col items-center h-screen overflow-hidden w-96 bg-red-950">
        <img
          src={logo}
          alt="Logo"
          className="m-8 bg-white rounded-full w-52 h-52"
        />
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="relative w-64 mb-5">
            <img
              src={user}
              alt="user"
              className="absolute w-6 h-6 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="text"
              placeholder="ID number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-11/12 h-10 pl-10 text-gray-700 placeholder-gray-700 bg-gray-300 border-none rounded-sm outline-none text-md"
              required
            />
          </div>

          <div className="relative w-64 mb-5">
            <img
              src={passwordIcon}
              alt="Password Icon"
              className="absolute w-6 h-6 transform -translate-y-1/2 left-3 top-1/2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-11/12 h-10 pl-10 text-gray-700 placeholder-gray-700 bg-gray-300 border-none rounded-sm outline-none text-md"
              required
            />
          </div>

          {error && <p className="text-red-500 text-md">{error}</p>}
          {success && <p className="text-green-500 text-md">{success}</p>}

          <button
            type="submit"
            className="w-24 h-8 mt-4 font-bold text-white transition duration-200 bg-green-600 rounded-sm text-md hover:bg-green-700"
          >
            Sign in
          </button>
        </form>

        <div className="flex flex-col items-center mt-8 border-t-2 border-white pt-9">
          <a href="#" className="text-lg font-normal text-white">
            Forgot Password?
          </a>
        </div>
      </div>

      
      <div className="relative items-center justify-center hidden h-screen sm:block">
        <img
          src="/src/img/LeftMove.png"
          alt="Left Arrow"
          className="absolute z-20 max-h-full transform -translate-y-1/2 cursor-pointer top-1/2 left-96"
          onClick={handlePrev}
        />

        <img
          src="/src/img/RightMove.png"
          alt="Right Arrow"
          className="absolute z-20 max-h-full transform -translate-y-1/2 cursor-pointer top-1/2 right-12"
          onClick={handleNext}
        />

        <div className="absolute z-50 flex items-center justify-center transform bottom-12 left-2/4 -translate-x-2/4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-2 transition-all duration-300 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

        <div className="relative flex w-full h-full overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
              className={`object-cover w-full h-full transition-opacity duration-500 ${
                currentIndex === index ? "opacity-100" : "opacity-0 hidden"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;

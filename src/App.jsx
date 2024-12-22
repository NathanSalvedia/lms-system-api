import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequestBook from "./components/RequestBook";
import Transaction from "./components/Transaction";
import ViewBook from "./components/ViewBook";
import HomePage from "./components/HomePage";
import BookList from "./components/BookList";
import UserProfile from "./components/UserProfile";
import Action from "./components/Action";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/requestbook" element={<RequestBook />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/viewbook/:id" element={<ViewBook />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/booklist" element={<BookList />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/action" element={<Action />} />
    </Routes>
  );
}

export default App;
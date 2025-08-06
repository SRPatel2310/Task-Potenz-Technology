// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div
        className="text-xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        MyApp
      </div>

      <div className="flex items-center space-x-6">
        {user && (
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img
              src={user.image}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-blue-400"
            />
            <span className="text-gray-700 font-medium first-letter:capitalize">{user.username}</span>
          </div>
        )}

       {/* logout  */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

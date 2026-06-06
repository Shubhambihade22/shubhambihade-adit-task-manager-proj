import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Successful...!");

    navigate("/login");
  };

  return (
    <nav className="bg-teal-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Adit - Task Manager</h1>

        <h1 className="text-sm md:text-base font-medium">
          {user ? `Welcome, ${user.name}!` : "Welcome!"}
        </h1>

        <div className="flex gap-6 text-sm">
          <a
            href="https://adit.com/about-us"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>

          <a
            href="https://adit.com/contact"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>

          <a
            href="https://adit.com/practice-management-tools"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Info
          </a>

          <a
            href="https://adit.com/careers"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>
        </div>

        <button
          onClick={handleLogout}
          className="
            flex items-center gap-2
            bg-red-600 hover:bg-red-700
            px-4 py-2
            rounded-lg
            text-sm md:text-base
            transition
          "
        >
          <LogoutIcon className="text-white text-lg" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

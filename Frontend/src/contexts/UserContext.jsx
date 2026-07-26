import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavContext } from "./NavContext";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setDropdownOpen } = useContext(NavContext);

  const navigate = useNavigate();
  // In development, make direct requests to backend; in production use relative paths
  const apiBaseUrl =
    import.meta.env.MODE === "production" ? "" : "http://localhost:3000";

  const getHeaders = () => {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Restore user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to restore user from storage", error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const createUser = async (userData) => {
    const url = `${apiBaseUrl}/api/user/register`;
    const { email, firstName, lastName, password } = userData;

    try {
      const response = await axios.post(url, {
        email,
        firstName,
        lastName,
        password,
      });
      const user = response.data.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Status Code:", response.status);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Server Error Data:", error.response.data);
        console.error("Server Status:", error.response.status);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  };

  const loginUser = async (userData) => {
    const url = `${apiBaseUrl}/api/user/login`;
    const { email, password } = userData;

    try {
      const response = await axios.post(url, { email, password });
      const user = response.data.user;
      setUser(user);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Status Code:", response.status);
      navigate("/");
      return { success: true };
    } catch (error) {
      if (error.response) {
        console.error("Server Error Data:", error.response.data);
        console.error("Server Status:", error.response.status);
        return {
          success: false,
          error: error.response.data.error || "Login failed",
        };
      } else {
        console.error("Network Error:", error.message);
        return { success: false, error: error.message };
      }
    }
  };

  function logout() {
    setUser(null);
    setDropdownOpen(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  }
  return (
    <UserContext.Provider
      value={{ createUser, loginUser, user, setUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

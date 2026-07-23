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
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const getHeaders = () => {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

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

  function logout() {
    setUser(null);
    setDropdownOpen(false);
  }
  return (
    <UserContext.Provider
      value={{ createUser, loginUser, user, setUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

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
      const response = axios.post(url, { email, password });
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
  return (
    <UserContext.Provider value={{ createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
}

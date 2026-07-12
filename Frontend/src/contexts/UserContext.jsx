import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const createUser = async (userData) => {
    const apiBaseUrl =
      import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    const url = `${apiBaseUrl}/api/user/register`;
    const { email, firstName, lastName, password } = userData;

    try {
      const response = await axios.post(url, {
        email,
        firstName,
        lastName,
        password,
      });
      console.log("Success:", response.data);
      console.log("Status Code:", response.status);
    } catch (error) {
      // Axios captures HTTP errors (like 400 or 500 codes) here
      if (error.response) {
        console.error("Server Error Data:", error.response.data);
        console.error("Server Status:", error.response.status);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  };

  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
}

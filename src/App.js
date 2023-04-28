import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";

const App = () => {
  const { user } = UserAuth();
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatspace" element={<Homepage />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;

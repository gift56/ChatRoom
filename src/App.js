import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./util/ProtectedRoute";
import { ChatContextProvider } from "./context/ChatsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/chatspace"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;

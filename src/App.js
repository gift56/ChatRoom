import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./util/ProtectedRoute";
import { ChatContextProvider } from "./context/ChatsContext";

const App = () => {
  const element = document.documentElement;
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

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
                <Homepage setTheme={setTheme} theme={theme} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ChatContextProvider>
    </AuthContextProvider>
  );
};

export default App;

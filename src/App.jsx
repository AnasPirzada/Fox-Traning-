// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Exercise from "./pages/Exercise.jsx";
import Dashboard from "./pages/Home.jsx";
import Logout from "./pages/Logout.jsx";
import Program from "./pages/Program/Program.jsx";
import Users from "./pages/Users/Users.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import ProgramDetails from "./pages/Program/ProgramDetails.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program/programdetails" element={<ProgramDetails/>} />
        <Route path="/Exercise" element={<Exercise />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

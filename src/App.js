import React from "react";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Protect from "./components/Protect";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Protect Component={Dashboard} />} />
      </Routes>
    </>
  );
}

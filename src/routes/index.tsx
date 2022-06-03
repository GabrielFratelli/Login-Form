import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/autenticate" element={<h1>Welcome back!!!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

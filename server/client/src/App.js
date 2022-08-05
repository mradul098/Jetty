import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Menu from "./components/Menu"
import Table from "./components/Table"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/menu/:id" element={ <Menu/> }/>
      <Route path="/table/:id/:lan" element={ <Table/> }/>
    </Routes>
  </BrowserRouter>;
}

export default App;
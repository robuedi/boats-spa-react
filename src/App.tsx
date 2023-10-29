import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Boat from "./pages/Boat"
import Main from "./layout/Main"

function App() {
  return (
    <Router>
        <Main
          content={
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="boats/:id" element={<Boat />} />
            </Routes>
          }
        />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route,  createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screens/home';
import Technology from './screens/category/topic';
import Topic from './screens/category/topic';
import Topics from './screens/category/Topics';
import Register from './screens/register';
import Login from './screens/login';
import Subjects from './screens/category/Subjects';



 

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;

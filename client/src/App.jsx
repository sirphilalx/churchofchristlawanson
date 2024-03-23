import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/sign-up" Component={Signup} />
        <Route path="/sign-in" Component={Signin} />
        <Route path="/Dashboard" Component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

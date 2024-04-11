import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Library from "./pages/Library";
import Directory from "./pages/Directory";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/sign-up" Component={Signup} />
        <Route path="/sign-in" Component={Signin} />
        <Route path="/Dashboard" Component={Dashboard} />
        <Route path="/library" Component={Library} />
        <Route path="/directory" Component={Directory} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

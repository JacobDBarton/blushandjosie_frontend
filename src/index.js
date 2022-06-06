import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Show from "./pages/Show";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} >
        <Route path="/collection" element={<Collection />} />
        <Route path="/show" element={<Show />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  </Router>
);

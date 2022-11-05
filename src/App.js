import React from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <hr />
        <div className="footd">
          <img src="img/zuri.png" alt="zuri-logo" />{" "}
          <p>HNG Internship 9 Frontend Task</p> <img src="img/I4G.png" alt="" />{" "}
        </div>
      </footer>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
// ! IMPORT REACT-ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ! IMPORT HOME
import Home from "./Home";
// ! IMPORT CSS
import "./style.css";

import Navv from "./Navv";
import Footer from "./Footer";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="preloaderr">
          <img
                src="../imgs/logo.png"
                alt=""
                className="imglogo"
              />
          <span class="loader"></span>{" "}
        </div>
      ) : (
        <>
        <Navv/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;

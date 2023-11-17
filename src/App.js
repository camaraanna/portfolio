import { Route, Router, Routes } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomePage from "./scenes/homepage";
import Navbar from "./scenes/navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./scenes/footer/footer";

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 300]);

  return (
    <div className="App">
      <motion.div style={{ y: y1, ease: "easeInOut"  }}>
        <Navbar />
      </motion.div>

      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

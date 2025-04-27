import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import No2 from "./pages/no2";
import No3 from "./pages/no3";
import bgPhoto from "./assets/bg-screen.jpg";
const AnimatedButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg overflow-hidden group">
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
        <span className="absolute top-0 left-0 w-full h-0.5 bg-gray-300 group-hover:h-full transition-all duration-500 ease-out transform group-hover:translate-y-0 -translate-y-full"></span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 group-hover:h-full transition-all duration-500 ease-out transform group-hover:translate-y-0 translate-y-full"></span>
      </button>
    </Link>
  );
};

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-8 items-center">
        <h1 className="text-4xl font-bold text-white">TP_FZ_DeandroNajwanAhmadSyahbanna_SBD9</h1>
        <div className="flex space-x-6">
          <AnimatedButton to="/no2">Number 1&2 (Personal Page)</AnimatedButton>
          <AnimatedButton to="/no3">Number 3 (Counter Demo)</AnimatedButton>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen h-auto relative">
        <img
          src={bgPhoto}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full opacity-95 -z-10"
          />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/no2" element={<No2 />} />
          <Route path="/no3" element={<No3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
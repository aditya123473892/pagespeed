import React from "react";
import { Routes, Route } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebsiteGrader />} />
      <Route path="/lighthouse" element={<Lighthouse />} />
    </Routes>
  );
}

export default App;

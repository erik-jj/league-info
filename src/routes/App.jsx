import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "..//pages/home/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
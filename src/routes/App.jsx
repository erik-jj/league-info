import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champs from "..//pages/home/index";
import ChampsInfo from "..//pages/home/champ-detail/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Champs />}></Route>
        <Route path="/champs/" element={<Champs />}></Route>
        <Route path="/champs/:id" element={<ChampsInfo />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

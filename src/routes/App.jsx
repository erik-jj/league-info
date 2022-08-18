import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Champs from "..//pages/home/index";
import ChampsInfo from "..//pages/home/champ-detail/index";
import NotFound from "../components/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Champs />}></Route>
        <Route path="/champs/" element={<Champs />}></Route>
        <Route path="/champs/:id" element={<ChampsInfo />}></Route>
        <Route path="/not-found/" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

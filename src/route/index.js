// rotas.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../paginas/home";
import Contato from "../paginas/contato";
 
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
} export default Rotas;
 
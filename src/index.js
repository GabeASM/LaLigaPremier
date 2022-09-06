import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equipos from "./routes/Equipos";
import Nosotros from "./routes/Nosotros";
import Selecciones from "./routes/Selecciones";

import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./routes/Inicio";
import NotFound from "./routes/NotFound";
import Post from "./routes/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio/>}></Route>
        <Route path="/Nosotros" element={<Nosotros />}></Route>
        <Route path="/Inicio/:id" element={<Post />}></Route>
        <Route path="/Equipos" element={<Equipos />}></Route>
        <Route path="/Selecciones" element={<Selecciones />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

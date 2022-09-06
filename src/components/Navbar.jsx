import React, { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const Navbar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {}, [searchParams]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        La Liga Premier
      </NavLink>
      <div className="container">
        <NavLink to="/Equipos" className="nav-link">
          Equipos
        </NavLink>
        <NavLink to="/Selecciones" className="nav-link">
          Selecciones
        </NavLink>
        <NavLink to="/Nosotros" className="nav-link">
          Nosotros
        </NavLink>
      </div>
      <form className="d-flex">
        <input
          className="from-control mb-2"
          type="text" placeholder="Buscar"
          value={searchParams.get("filter") || ""}
        ></input>
        
      </form>
    </nav>
  );
};

export default Navbar;

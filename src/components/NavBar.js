import React from "react";
import "./NavBar.css";
import logo from "../assets/logo-csc.png";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const openNav = () => {
    const nav = document.getElementById("mobile-nav");
    nav.style.width = "100%";
  };

  const closeNav = () => {
    const nav = document.getElementById("mobile-nav");
    nav.style.width = "0%";
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Ilumina" />
      </div>
      <nav>
        <ul className="lista-nav">
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/inicio"}
            >
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/servicio"}
            >
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/equipo"}
            >
              NUESTRO EQUIPO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/porquecsc"}
            >
              ¿POR QUÉ CSC?
            </NavLink>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        icon={faBars}
        className="menu"
        onClick={() => {
          openNav();
        }}
      />
      <div className="overlay" id="mobile-nav">
        <FontAwesomeIcon
          icon={faXmark}
          className="cancel-nav"
          onClick={() => closeNav()}
        />
        <div className="overlay-content">
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/inicio"}
              onClick={()=>closeNav()}
            >
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/servicio"}
              onClick={()=>closeNav()}
            >
              SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/equipo"}
              onClick={()=>closeNav()}
            >
              NUESTRO EQUIPO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "active";
                } else {
                  return "link";
                }
              }}
              to={"/porquecsc"}
              onClick={()=>closeNav()}
            >
              ¿POR QUÉ CSC?
            </NavLink>
          </li>
        </div>
      </div>
    </header>
  );
}

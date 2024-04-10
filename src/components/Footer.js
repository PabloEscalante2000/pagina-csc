import React from 'react'
import "./Footer.css"
import logo from "../assets/logo-csc.png"


export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt='Consultora Salud Corporativa'/>
      </div>
      <div className='footer-content'>
        <span>Dirección</span>
        <p>Calle Las Gaviotas 127, Surquillo - Lima, Perú</p>
        <span>Teléfono</span>
        <p>+51 930509438</p>
        <span>Correo</span>
        <p>infoeadoes@grupoeades.org</p>
      </div>
      <span>Todos los derechos reservados 2024</span>
    </footer>
  )
}

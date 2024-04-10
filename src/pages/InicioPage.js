import React from "react";
import "./InicioPage.css";
import inicioImg1 from "../assets/inicio-img1.PNG";
import inicioImg2 from "../assets/inicio-img2.PNG";
import inicioImg3 from "../assets/inicio-img3.PNG";
import { useState,useEffect } from "react";

export default function InicioPage() {
  
  // let animacion = document.getElementById("animacion1");
  // let posicionObj = animacion.getBoundingClientRect().top;

  const [posAnimacion,setPosAnimacion] = useState(0)
  const [disappear,setDisappear] = useState(true)

  // useEffect(()=>{
  //   setPosAnimacion(posicionObj);
  // },[])
  
  useEffect(()=>{
    let animacion = document.getElementById("animacion1");    
    
    const handleScroll = ()=>{
      let posicionObj = animacion.getBoundingClientRect().top;
      setPosAnimacion(posicionObj)
      console.log(posAnimacion);

      if(posAnimacion < 5*(window.innerHeight)/6){
        setDisappear(false)
      } else {
        setDisappear(true)
      }
    }

    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.addEventListener("scroll",handleScroll);
    }

  },[posAnimacion])
  

  return (
    <>
      <main className="tit-ini">
        <h1>«Salud y equilibrio empresarial»</h1>
      </main>
      <section className="mision-ini">
        <h2>Misión</h2>
        <div className="mision-ini-content">
          <aside>
            <p>
              Diseñar y/o potenciar el clima y cultura que tu empresa necesita,
              a través de soluciones personalizadas e innovadoras que se
              enfoquen en la salud mental, motivación y rendimiento de los
              trabajadores, contribuyendo al logro de una organización
              eficiente.
            </p>
          </aside>
          <section></section>
        </div>
      </section>
      <section className="vision-ini">
        <h2>Visión</h2>
        <div className="vision-ini-content">
          <section></section>
          <aside>
            <p>
              Diseñar y/o potenciar el clima y cultura que tu empresa necesita,
              a través de soluciones personalizadas e innovadoras que se
              enfoquen en la salud mental, motivación y rendimiento de los
              trabajadores, contribuyendo al logro de una organización
              eficiente.
            </p>
          </aside>
        </div>
      </section>
      <section className="ventajas-inicio">
        <section>
          <h2>VENTAJAS DE CUIDAR LA CULTURA LABORAL DE LA ORGANIZACIÓN</h2>
        </section>
        <aside id="animacion1" className={disappear ? "":"appear"}>
          <div>
            <span>
              <p>1</p>
            </span>
            <img
              src={inicioImg1}
              alt="ayuda a atraer nuevos empleados y retener a los más destacados"
            />
            <p>
              ayuda a atraer nuevos empleados y retener a los más destacados
            </p>
          </div>
          <div>
            <span>
              <p>2</p>
            </span>
            <img
              src={inicioImg2}
              alt="facilita el compromiso y la retencion de la fuerza de trabajo"
            />
            <p>facilita el compromiso y la retencion de la fuerza de trabajo</p>
          </div>
          <div>
            <span>
              <p>3</p>
            </span>
            <img
              src={inicioImg3}
              alt="los empleados mejoran su rendimiento, son más eficientes y productivos"
            />
            <p>
              los empleados mejoran su rendimiento, son más eficientes y
              productivos
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

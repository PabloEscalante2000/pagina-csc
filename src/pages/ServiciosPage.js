import React from 'react'
import "./ServiciosPage.css"
import FunctionalCard from '../components/FunctionalCard'
import {card1,card2} from '../data/infoCardsFunctional';
import { faClipboardList, faPenNib, faHeartPulse, faUserTie, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPersonCircleCheck, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/Card';

export default function ServiciosPage() {
  return (
    <>
      <section className='portada-serv'>
      </section>
      <main className='main-serv'>
        <h1>CONSULTORIA EN CLIMA Y CULTURA ORGANIZACIONAL</h1>
        <section className='cli-cult-flex'>
          <div className='serv-img1'></div>
          <aside>
            <p>
            Brindamos un diagnóstico del clima laboral de tu empresa que permitirá conocer el nivel de satisfacción de los empleados, motivación, productividad y cultura organizacional, facilitando la identificación de aquellas áreas de mejora, a fin de promover un ambiente laboral más saludable y rentable que permita optimizar los recursos.
            </p>
          </aside>
        </section>
      </main>
      <section className='cont-serv-1'>
        <div className='card-function-flex'>
          <FunctionalCard data={card1}/>
          <FunctionalCard data={card2}/>
        </div>
        <h4>ESTA CONSULTORÍA INCLUYE LO SIGUIENTE:</h4>
        <div className='card-flex'>
          <Card icon={faClipboardList} title="Evaluación del clima y cultura organizacional">
            <ul className='ul-card'>
              <li>Definir el objetivo de la evaluación</li>
              <li>Seleccionar la metodología a travéz de encuestas y entrevistas</li>
              <li>Aplicar las evaluaciones y ejecutar las entrevistas</li>
              <li>Analizar los resultados</li>
              <li>Redactar un informe con los resultados</li>
              <li>Asesorar durante la implementación de las acciones concretas de mejora para el clima laboral</li>
              <li>Monitorear y evluar para medir el impacto de las acciones implmentadas</li>
            </ul>
          </Card>
          <Card icon={faPenNib} title="Diseño e implementación de estrategias para mejorar el clima y cultura organizacional">
            <ul className='ul-card'>
              <li>Estudio y comprensión de la cultura actual a través de encuestas y análisis de datos</li>
              <li>Definición de valores y objetivos que se desea promover y comunicar</li>
              <li>Participación y empoderamiento a través de capacitaciones que permitan el cambio</li>
              <li>Reconocimiento y recompensas</li>
              <li>Liderazgo Ejemplar</li>
              <li>Medición del clima laboral</li>
              <li>Medición de la satisfacción de los empleados</li>
            </ul>
          </Card>
          <Card icon={faHeartPulse} title="Desarrollo de programas de bienestar laboral dirigidos al equilibrio y salud mental de los empleados">
            <p className='p-card'>
              A través de una cultura de apoyo se busca brindar espacios de consejería para los trabajadores que requieran escucha y atención inmediata en sus problemas personales a fin de evitar que estos intervengan negativamente en el ejercicio de funciones laborales, así como en el clima de la empresa.
            </p>
          </Card>
        </div>
      </section>
      <main className='main-serv'>
        <h1>SELECCION DE PERSONAL</h1>
        <section className='cli-cult-flex'>
          <div className='serv-img2'></div>
          <aside>
            <p>
            Brindamos un sistema integral de reclutamiento y selección eficiente de nuevos talentos, utilizando diversas metodologías de acuerdo a las necesidades y objetivos de la empresa.
            <h3>¿Cuándo recurrir a esta consultoría?</h3>
            Cunado se desee contratar al mejor perfil del mercado laboral, mediante un proceso eficiente y acorde a los recursos de la empresa.
            </p>
          </aside>
        </section>
      </main>
      <section className='cont-serv-2'>
        <h4>¿QUÉ IMPLICA ESTA CONSULTORÍA?</h4>
        <div className='card-flex'>
          <Card icon={faPersonCircleCheck} title="Reclutamiento y selección de personal especializado">
            <ul className='ul-card'>
              <li>Análisis de las necesidades de la empresa</li>
              <li>Definición del perfil detallado para el puesto</li>
              <li>Difusión de la oferta</li>
              <li>Recepción de solicitudes</li>
              <li>Entrevistas de selección</li>
              <li>Presentación de candidatos al cliente</li>
              <li>Seguimiento y retroalimentación</li>
              <li>Oferta de empleo</li>
              <li>Integración del candidato</li>
            </ul>
          </Card>
          <Card icon={faUserTie} title="Tipos de puestos que seleccionamos">
            <ul className='ul-card'>
              <li>Profesionales</li>
              <li>Analistas</li>
              <li>Administrativos</li>
              <li>Técnicos</li>
              <li>Puestos de base</li>
              <li>Operarios de producción</li>
              <li>Operarios de apoyo logísitico</li>
              <li>Seguridad Limpieza</li>
            </ul>
          </Card>
        </div>
      </section>
      <main className='main-serv'>
        <h1>CAPACITACIÓN Y DESARROLLO Y GESTIÓN DE TIEMPOS</h1>
        <section className='cli-cult-flex'>
          <div className='serv-img3'></div>
          <aside>
            <p>
            Consideramos que, para el equilibrio corporativo y máxima rentabilidad de la empresa, es necesario que los trabajadores cuenten con herramientas que les permitan afrontar eficientemente los asuntos de índole personal, a fin de que no afecten negativamente aquellos de carácter laboral. 
            <br></br>
Nuestro servicio se preocupa por crear espacios de escucha activa para los trabajadores, lo que implica un servicio clínico de consejería de urgencia, a fin de identificar y abordar adecuadamente los problemas emocionales de los trabajadores. También estará enfocado en brindar herramientas puntuales para prevenir y/o abordar la ansiedad, el estrés, la depresión u otros malestares emocionales.
            </p>
          </aside>
        </section>
      </main>
      <section className='cont-serv-3'>
        <h4>¿QUE IMPLICA ESTA CONSULTORÍA?</h4>
        <div className='card-flex'>
          <Card icon={faPersonCirclePlus} title="Mejora el performance de tus equipos">
            <ul className='ul-card'>
              <li>Identificación de las necesidades requeridas por las distintas áreas</li>
              <li>Diseño del programa personalizado de capacitación</li>
              <li>implementación del programa utilizando herramientas como seminarios, talleres, entre otros</li>
              <li>Seguimiento y evaluación del progreso de los participantes</li>
              <li>Feedback y ajustes</li>
              <li>Medición de resultados</li>
              <li>Elaboración de un informe final</li>
            </ul>
          </Card>
          <Card icon={faStar} title="¿Qué nos diferencia de otras consultorías?">
            <p className='p-card'>
              Nuestro servicio se preocupa por espacios de escucha activa para los trabajadores. Ello implica un servicio de consejería de urgencia, vinculado en temas relacionados a la salud mental, a fin de identificar y abordar adecuadamente el trabajo. Contamos con el servicio de consejería dirigido a prevenir la ansiedad, el estrés, la depresión y otros malestares emocionales.
            </p>
          </Card>
        </div>
      </section>
    </> 
  )
}

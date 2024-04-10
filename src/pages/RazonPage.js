import React from 'react'
import "./RazonPage.css"

export default function RazonPage() {
  return (
    <>
      <section className='content-raz'>
        <h1>¿POR QUÉ ELEGIRNOS?</h1>
        <div className='razon-bloq'>
          <div className='raz-bloq-1'></div>
          <aside>
            <p>Experiencia y conocimiento en el mercado laboral desde una perspectiva tanto organizacional como clínica.</p>
          </aside>
        </div>
        <div className='razon-bloq'>
          <aside>
            <p className='p-right'>Enfoque personalizado y adaptado a las necesidades y exigencias legales de cada empresa.</p>
          </aside>
          <div className='raz-bloq-2'></div>
        </div>
        <div className='razon-bloq'>
          <div className='raz-bloq-3'></div>
          <aside>
            <p>Servicio de atención clínica a través de «consejería de urgencia» y «departamento de mediación de conflictos»</p>
          </aside>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import "./EquipoPage.css"
import CardColaborator from '../components/CardColaborator'
import {arrayColaborator} from "../data/DataColaborator"

export default function EquipoPage() {
  return (
    <main className='main-serv equipo-main'>
      <h1>Colaboradores</h1>
      <div className='card-flex-2'>
        {arrayColaborator.map((e,index)=>(
          <CardColaborator name={e.name} cpp={e.cpp} name_class={e.name_class}>
            <ul className='ul-card'>
              {e.description.map((info,index2)=>(
                <li>{info}</li>
              ))}
            </ul>
          </CardColaborator>
        ))}
      </div>
    </main>
  )
}

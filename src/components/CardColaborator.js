import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./CardColaborator.css"

export default function CardColaborator(props) {
  
  
    return (
    <section className='normal-card'>
        <div className='normal-card-title'>
            <span className='card-icon'>
                <FontAwesomeIcon icon={faUser} />
            </span>
            <div>
                <h2>{props.name}</h2>
                {props.cpp != null ? (
                    <p>CPP:{props.cpp}</p>
                ):""}
            </div>            
        </div>
        <aside className={props.name_class}>
        </aside>
        <div className='normal-card-content'>
            {props.children}
        </div>
    </section>
  )
}

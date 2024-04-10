import React from 'react'
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props) {
  return (
    <section className='normal-card'>
        <div className='normal-card-title'>
            <span className='card-icon'>
            <FontAwesomeIcon icon={props.icon} />
            </span>
            <h2>{props.title}</h2>
        </div>
        <div className='normal-card-content'>
            {props.children}
        </div>
    </section>
  )
}

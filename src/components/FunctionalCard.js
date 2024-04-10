import React from 'react'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import "./FunctionalCard.css"

export default function FunctionalCard({data}) {
  
    const [activate,setActivation] = useState(false)

    const alternateFunc = ()=>{
        setActivation(!activate)
    }
  
    return (
    <section className='functional-card'>
        <h2>{data.tit}</h2>
        <div>
            <p>
                {data.txt}
            </p>
        </div>
        <div className={activate ? 'hidden':'active'}>
        <button  onClick={alternateFunc}>
            <FontAwesomeIcon icon={faArrowDown} />
        </button>
        </div>
        <div className={activate ? 'active':'hidden'}>
            {data.hidden_txt}
        </div>
        <div className={activate ? 'active':'hidden'}>
        <button  onClick={alternateFunc}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>
        </div>
    </section>
  )
}

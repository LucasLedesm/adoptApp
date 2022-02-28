import React from 'react'
import { Icon } from '@iconify/react';

const Tabs = () => {
  return (
    <div >
        <div className="tabs is-centered">
  <ul className='tabssbg' >
    <li ><a className='tabss' ><Icon icon="ic:baseline-pets" />Adopcion</a></li>
    <li ><a className='tabss'><Icon icon="bx:donate-heart" />Ayudar </a></li>
    <li ><a className='tabss'><Icon icon="ic:baseline-event" />Evento</a></li>
    <li ><a className='tabss'><Icon icon="bi:person-circle" />Perfil</a></li>
    
  </ul>
</div>
    </div>
  )
}

export default Tabs
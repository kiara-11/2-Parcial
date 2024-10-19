import React from 'react'
import "./encabezado.css"
import imagen from "../assets/Vector.png"
import imagen2 from "../assets/Ellipse.png"

const encabezado = () => {
  return (
    <div className='encabezado'>
        <img className='imagen2' src={imagen2} alt="" />

        <h1>Agenda/Topic</h1>
        <h2>SAAS-0000</h2>
        <img className='imagen1' src={imagen} alt="" />
    </div>
  )
}

export default encabezado
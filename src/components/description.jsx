import React from 'react'
import "./description.css"
import Update from "./updated";


const description = ({info}) => {
  return (
    <div className='descripcion'>
        <p>{info}</p>
        <Update/>
    </div>
  )
}

export default description
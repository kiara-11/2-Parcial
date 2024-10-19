import React from 'react'
import Desc from "./description"
import Enca from "./encabezado"
import "./template.css"


const template = (props) => {
    const notes= props.notes;
  return (
    <div>
        <Enca/>
        <Desc notes={notes.info}/>
    </div>
  )
}

export default template
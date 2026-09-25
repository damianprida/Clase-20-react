import React, { useState } from 'react'import "./index.css"

export default function App() {
  /* const modalAbiertoEstado = useState(false)
  const modalAbierto = modalAbiertoEstado[0]
  const setModalAbierto = modalAbiertoEstado[1] */
  const [modalAbierto, setModalAbierto] = useState (false)

  function abrirModal (){
    setModalAbierto(true)
  }
  console.log("[App.jsx] me renderize")
  return (
    <div>
      <button onClick={abrirModal}>Abrir modal</button>
      {
        modalAbierto
        &&
        <div className='modal-container'>
        <div className='modal'>
          <h1>Hola, soy un modal!</h1>
          <button>Cerrar</button> 
        </div>

      </div>
      }
      <Counter/>
    </div>
  )
}

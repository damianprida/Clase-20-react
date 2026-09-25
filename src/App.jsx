import React, { useState } from 'react'
import "./index.css"

export default function App() {  

/*   const mensaje_servidor = [
    {
      id: 1,
      autor: "pepe",
      contenido: "Hola!",
      fecha: "25 de Agosto 15:30"
    },
    {
      id: 2,
      autor: "Maria",
      contenido: "Todo bien?",
      fecha: "25 de Agosto 15:33"
    },
    {
      id: 3,
      autor: "Pedro",
      contenido: "Que cuentan?",
      fecha: "25 de Agosto 15:38"
    }
  ]
  let mensajes_jsx = []
  for(const mensaje of mensaje_servidor){
    mensajes_jsx.push(
      <div key={mensaje.id}>
        <h2>{mensaje.autor}</h2>
        <p>{mensaje.contenido}</p>
        <span>Fecha: {mensaje.fecha}</span>
        <hr/>
      </div>
    )
  }
} */
/*
Contactos:
[
  {
    id: 1
    nombre: "Marcos",
    ultimo mensaje: "hay que juntarnos!",
    imagen: 
    mensajes_sin_leer: "2",
    fecha_ultimo_mensaje: "12/02/2023 14:30"
  },
]
*/
  const contactos_lista = [
    {
      id: 1,
      nombre: "Marcos",
      ultimo_mensaje: "Holaa",
      Imagen: "https://i.pinimg.com/236x/4c/99/50/4c99509d91b513f10d9d37340d5036ea.jpg",
      mensaje_sin_leer: "1",
      fecha_ultimo_mensaje: "12/02/2023 14:30"
    },
    {   
      id: 2,
      nombre: "Mar",
      ultimo_mensaje: "Como andas?",
      Imagen: "https://i.pinimg.com/736x/ca/b3/29/cab3290a119087c567b5a9e0bf1829b9.jpg",
      mensaje_sin_leer: "3",
      fecha_ultimo_mensaje: "12/02/2023 15:30"
    },
    {
      id: 3,
      nombre: "Maria",
      ultimo_mensaje: "nos vemos mañana!",
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLIaTRQf3Bu-DagTF3-QDL8fK1mljbTuzt0b2pJCRsyx-UQ43Rr4ge_YA&s=10",
      mensaje_sin_leer: "1",
      fecha_ultimo_mensaje: "12/02/2023 15:45"
    },
    {
      id: 4,
      nombre: "Horacio",
      ultimo_mensaje: "si si, dale",
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCUl-Lv5s1h8bacP9z4iPhew0tYnMNs348RaUGSWTtUDarh3lm01bQo6y&s=10",
      mensaje_sin_leer: "1",
      fecha_ultimo_mensaje: "12/02/2023 15:36"
    }
]
  let contactos_jsx = []
  for (const contacto of contactos_lista) {
    contactos_jsx.push(
      <div key={contacto.id}>
        <div className='image-contacto-container'>
        <img src={contacto.Imagen} alt={contacto.nombre} className='imagen_contacto'/>
        </div>
        <h2>{contacto.nombre}</h2>
        <p>{contacto.ultimo_mensaje}</p>
        <span>{contacto.fecha_ultimo_mensaje}</span>
        <span>{contacto.mensaje_sin_leer}</span>
        <hr/>
      </div>
    )
  }
    return (    
    <div>
      {contactos_jsx}
    </div>
  )
}
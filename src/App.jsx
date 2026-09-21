import React from 'react'
import "./index.css"
import ProductCard from './Components/ProductCard/ProductCard'
import Message from './Components/Message/Message'

export default function App() {

  let precio = 40000
  return (
    <div>
      <div>
        El valor del iva de ${precio} ARS es ${precio * 0.21} ARS
      </div>
      <ProductCard/>
      <div>
        <Message
          fecha={"12:00 PM"}
          autor={"Yo"}
          contenido={"Hola, como estas?"}
          estatus_envio={"visto"}
          />
        <Message
          fecha={"12:03 PM"}
          autor={"Lu"}
          contenido={"Hola amor! bien y vos?"}
          estatus_envio={"enviado"}
          />
        <Message
          fecha={"12:07 PM"}
          autor={"Yo"}
          contenido={"Bien bien, te extraño"}
          estatus_envio={"visto"}
          />
        <Message
          fecha={"12:10 PM"}
          autor={"Lu"}
          contenido={"Yo tambien!"}
          estatus_envio={"enviado"}
          />
      </div>
    </div>
  )
}

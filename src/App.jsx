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
          fecha={"12:00"}
          autor={"Yo"}
          contenido={"Hola, como estas?"}
          estatus_envio={"visto"}
          />
        <Message
          fecha={"12:03"}
          autor={"Lu"}
          contenido={"Hola amor! bien y vos?"}
          estatus_envio={"visto"}
          />
        <Message
          fecha={"12:07"}
          autor={"Yo"}
          contenido={"Bien bien, te extraño"}
          estatus_envio={"visto"}
          />
        <Message
          fecha={"12:10"}
          autor={"Lu"}
          contenido={"Yo tambien!"}
          estatus_envio={"pendiente"}
          />
      </div>
    </div>
  )
}

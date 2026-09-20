function Message(propiedades){
    return (
        <div>
            <h2>{propiedades.fecha}</h2>
            <p>{propiedades.autor}</p>
            <div>{propiedades.contenido}</div>
            <div>{propiedades.estatus_envio}</div>
            <hr />
        </div>
    )
}
export default Message
import React, { useState } from 'react';

const Tres = () => {
  const [usuario, setUsuario] = useState({
    nombre: ''
    ,apellido: ''
  })

  const nino = (e) => {
    setUsuario({
      ...usuario
      , [e.target.name] : e.target.value
    });
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log('enviando datos...' + usuario.nombre + ' ' + usuario.apellido);
  }
  return (
    <>
      <form className="" onSubmit={enviarDatos}>
      <input type="text" placeholder="Nombre" onChange={nino} name="nombre"></input><br/>
      <input type="text" placeholder="Apellido" onChange={nino} name="apellido"></input><br />
    
      <button type="submit" className="">Crear</button>
    </form>
    {/*<ul>
      <li>{usuario.nombre}</li>
      <li>{usuario.apellido}</li>
    </ul>*/}
    </>
  )
}

export default Tres;


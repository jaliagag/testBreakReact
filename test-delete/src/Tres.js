import React, { useState } from 'react';

const Tres = () => {
  const [usuario, setUsuario] = useState({
    nombre: ''
    ,apellido: ''
  })
  const [actualizado, setActualizado] = useState({
    valor1: ''
    ,valor2: ''
  });

  const nino = (e) => {
    setUsuario({
      ...usuario
      , [e.target.name] : e.target.value
    });
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    setActualizado({
      valor1: usuario.nombre
      , valor2: usuario.apellido
    })
    console.log('enviando datos...' + usuario.nombre + ' ' + usuario.apellido);
  }
  return (
    <>
      <form className="" onSubmit={enviarDatos}>
      <input type="text" placeholder="Nombre" onChange={nino} name="nombre" /><br/>
      <input type="text" placeholder="Apellido" onChange={nino} name="apellido" /><br />
      <button type="submit" className="">Crear</button>
    </form>
    <ul>
      <li>{actualizado.valor1}</li>
      <li>{actualizado.valor2}</li>
    </ul>
    </>
  )
}

export default Tres;
      //<li>{usuario.apellido}</li>

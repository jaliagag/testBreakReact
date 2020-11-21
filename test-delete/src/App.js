import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [hola, setHola] = useState(20);
  const [adios, setAdios] = useState(30);
  const [textito, setTextito] = useState('Write your shit here')
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
  
  function change(){
    if (hola === 20) {
      setHola(30);
      setAdios(20);
    } else {
      setHola(20);
      setAdios(30);
    }
  }

  function asdf(){
  }

  return (
    <>
      <div className="">
	<button onClick={change}>cambiar</button>
	<h1>{hola}</h1>
	<h1>{adios}</h1>
      </div>
      <div>
    <p>###########################</p>
	<input
	  type='text'
	  placeholder='your sheit'
	  onSubmit={e=>setTextito(e.target.value)}
	/>
	<br />
	<button onClick={asdf}>cambiar</button>
	<div>
	  <span>{textito}</span>
	</div>
      </div>
    <p>###########################</p>
    <form className="" onSubmit={enviarDatos}>
      <input type="text" placeholder="Nombre" onChange={nino} name="nombre"></input><br/>
    {/*      //<input type="text" placeholder="Nombre" onChange={nino} name="nombre"></input><br/>*/}
      <input type="text" placeholder="Apellido" onChange={nino} name="apellido"></input><br />
    {/*      //<input type="text" placeholder="Apellido" onChange={nino} name="apellido"></input><br />*/}
      <button type="submit" className="">Crear</button>
    </form>
    {/*<ul>
      <li>{usuario.nombre}</li>
      <li>{usuario.apellido}</li>
    </ul>*/}

    </>
  );
}

export default App;

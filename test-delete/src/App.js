import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [hola, setHola] = useState(20);
  const [adios, setAdios] = useState(30);
  const [textito, setTextito] = useState('Write your shit here')
  
  function change(){
    if (hola === 20) {
      setHola(30);
      setAdios(20);
    } else {
      setHola(20);
      setAdios(30);
    }
  }

  function actualizarTexto(){
    console.log('click');
    console.log(textito);
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
	  onSubmit={actualizarTexto}
	/>
	<br />
	<button type="submit">cambiar</button>
	<div>
	  <span>{textito}</span>
	</div>
      </div>
    <p>###########################</p>
    </>
  );
}

export default App;

// { /*onSubmit={e=>setTextito(e.target.value)}*/ }

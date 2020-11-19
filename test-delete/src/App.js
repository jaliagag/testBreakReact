import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  const [hola, setHola] = useState(20);
  const [adios, setAdios] = useState(30);
  function change(){
    if (hola === 20) {
      setHola(30);
      setAdios(20);
    } else {
      setHola(20);
      setAdios(30);
    }
  }
  return (
    <>
      <div className="">
	<p>
	  Hola Mundo
	</p>
	<button onClick={change}>cambiar</button>
	<h1>{hola}</h1>
	<h1>{adios}</h1>
      </div>
    </>
  );
}

export default App;

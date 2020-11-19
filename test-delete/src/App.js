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
    </>
  );
}

export default App;

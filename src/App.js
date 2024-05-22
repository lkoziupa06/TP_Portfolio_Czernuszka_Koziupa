import React from 'react';
import './App.css';
import Inicio from './views/Inicio/index.jsx';
import AcercaDeMi from './views/AcercaDeMi/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Conocimientos from './views/Conocimientos/index.jsx';
import Experiencia from './views/Experiencia/index.jsx';


function App() {
  return (
    <>
      <Inicio/>
      <AcercaDeMi/>
      <Conocimientos/>
      <Experiencia/>
    </>
  );
}

export default App;

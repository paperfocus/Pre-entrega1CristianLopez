import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div>
        <div>
          <NavBar />
          </div> 
          <div className='espacio-interior' style={{ padding: '1em' /* 1em será igual a 16px. */ }}></div>

      <ItemListContainer greeting="¡Hola, bienvenido a mi primera aplicación!" />
    </div>


  );
}

export default App;
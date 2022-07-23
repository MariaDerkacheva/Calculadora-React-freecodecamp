import './App.css';
import Boton from "./componentes/boton"
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from "react";
import{ evaluate } from "mathjs";


function App() {

  const [valor, setInput] = useState("");

  const agregarInput = val => {
    setInput(valor + val);
    
  };

  const calcularResultado = () => {
    if(valor) {
      setInput(evaluate(valor));
    }else {
      alert("Ingrese los valores para hacer los calculos")
    }
  };

  const agregar = val => {

    if(valor) {
      setInput(evaluate(valor));
    }else {
      alert("Ingrese los valores para hacer los calculos")
      return
    }
      setInput(valor + val);
  };
  

  return (
    <div className='App'>
      <div className='titulo'> 
          <h1>Calculadora React</h1>
      </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={valor}/>
          {/*---- son filas ----*/}
              <div className='fila'>
            {/*---- los botones dentro de las filas ----*/}
              <Boton manejarClick={agregarInput}>1</Boton>
              <Boton manejarClick={agregarInput}>2</Boton>
              <Boton manejarClick={agregarInput}>3</Boton>
              <Boton manejarClick={agregar}>+</Boton>
              </div>
              <div className='fila'>
              <Boton manejarClick={agregarInput}>4</Boton>
              <Boton manejarClick={agregarInput}>5</Boton>
              <Boton manejarClick={agregarInput}>6</Boton>
              <Boton manejarClick={agregar}>-</Boton>
              </div>
              <div className='fila'>
              <Boton manejarClick={agregarInput}>7</Boton>
              <Boton manejarClick={agregarInput}>8</Boton>
              <Boton manejarClick={agregarInput}>9</Boton>
              <Boton manejarClick={agregar}>*</Boton>
              </div>
              <div className='fila'>
              <Boton manejarClick={calcularResultado}>=</Boton>
              <Boton manejarClick={agregarInput}>0</Boton>
              <Boton manejarClick={agregar}>.</Boton>
              <Boton manejarClick={agregar}>/</Boton>
              </div>
          {/*---- botont de limpiar ------*/}
              <div className='fila'>
                <BotonClear manejarClear={() => setInput("")}>
                Clear
                </BotonClear>
              </div>
        
      </div>
    </div>
  );
}

export default App;

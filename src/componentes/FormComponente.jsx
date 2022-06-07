import React, { useState } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';

function FormComponente(props){

    const [input,setInput] = useState("");
    

    const manejarCambio = e => {
        setInput (e.target.value);

    }

    const manejarEnvio = e => {
        e.preventDefault();
        if (input.length < 3) {
            alert("No se aceptan menos de tres caracteres, ingresa la tarea completa")
            return
        }
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }


  return(
      <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
          <input
          className='tarea-input' 
          type='text'
          value={input}
          placeholder='Write a task'
          name='texto'
          onChange={manejarCambio}
          />
          <button className='tarea-boton'>
              Add task
          </button>
          {/* <input
          className='tarea-input'
          type='text'
          placeholder='Write a Description is optional'
          name='texto'
          onChange={manejarCambio}
          />
          <button className='tarea-boton2'>
              Description
          </button> */}

      </form>
  )  

}

export default FormComponente;
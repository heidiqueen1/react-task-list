import React from 'react';
import '../App.css';
import { BsFillEmojiDizzyFill } from "react-icons/bs";


function Tarea({id, texto, completada, completarTarea, eliminarTarea }){
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
            className="tarea-texto"
            onClick={() => completarTarea (id) }>
                {texto}
            </div>
            <div 
            className="tarea-contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                <BsFillEmojiDizzyFill className="tarea-icono"/>
            </div>
        </div>
    )
}

export default Tarea;
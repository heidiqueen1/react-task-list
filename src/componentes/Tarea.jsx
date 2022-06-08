import React from 'react';
import '../App.css';
import { BsXSquare, BsFillCalendar2DateFill } from "react-icons/bs";


function Tarea({id, texto, completada, procesada, completarTarea, eliminarTarea, enProcesoTarea }){
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
            className="tarea-texto"
            onClick={() => completarTarea (id) }>
                {texto}
            </div>
            <div 
            className={procesada ? "tarea-contenedor procesada" : "tarea-contenedor "}
            onClick={() => enProcesoTarea(id)}>
                <BsFillCalendar2DateFill className="tarea-icono-dos"/>
                i:<input type="date"></input> 
                f:<input type="date"></input>      
            </div>
            <div 
            className="tarea-contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                <BsXSquare className="tarea-icono"/>
            </div>
            
        </div>
    )
}

export default Tarea;
import React from 'react';
import '../App.css';
import { BsXSquare, BsFillCalendar2DateFill } from "react-icons/bs";
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useManejarTareas from './useManejarTareas';


function Tarea({id, texto, completada, procesada, completarTarea, eliminarTarea, enProcesoTarea }){
    
    const[inicio, setInicio] = useState(null);
    const[fin, setFin] = useState(null);
    
    const { setTareas,tareas }= useManejarTareas();

   const handleDateBegin = (date ) => {
    setInicio(date);
    setTareas(tareas.map(tarea => {
        if (tarea.id === id){
            return{
                ...tarea,
                inicio,
            }
        }
    }))
   }

   const handleDateEnd = (date) => {
    setFin(date)
    setTareas(tareas.map(tarea =>{
        if (tarea.id === id){
            return{
                ...tarea,
                fin,
            }
        }
    }))
   }
    

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
                i:<DatePicker selected={inicio} onChange={date => setInicio(date)} dateFormat="dd/MM/yyyy" ></DatePicker> 
                f:<DatePicker selected={fin} onChange={date => setFin(date)}  dateFormat="dd/MM/yyyy"></DatePicker>      
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
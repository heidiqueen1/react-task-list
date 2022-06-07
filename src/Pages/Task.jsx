import React from 'react';
import '../App.css';
import ListaDeTareas from '../componentes/ListaDeTareas';


function Task({estatus}){
    return(
        <div>
        <h2> Status {estatus}/ <span className='palabra-primera'>In Process/ </span><span className='palabra-segunda'>Done</span></h2>
        <>
        <ListaDeTareas />
        </>
        </div>
        

    )
}

export default Task;
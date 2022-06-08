import React from 'react';
import '../App.css';
import ListaDeTareas from '../componentes/ListaDeTareas';


function Task(){
    return(
        <div>
        <h2> Status To Do/ <span className='palabra-primera'>In Process/ </span><span className='palabra-segunda'>Done</span></h2>
        <>
        <ListaDeTareas />
        </>
        </div>
        

    )
}

export default Task;
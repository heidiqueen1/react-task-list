import React from 'react';
import '../App.css';
import ListaDeTareas from './ListaDeTareas';


function EstatusTareas({estatus}){
    return(
        <div>
        <h2> Status {estatus}</h2>
        <>
        <ListaDeTareas />
        </>
        </div>
        

    )
}

export default EstatusTareas;
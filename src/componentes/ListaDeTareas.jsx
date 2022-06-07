import '../App.css';
import { useEffect, useState} from 'react';
import Tarea from './Tarea';
import FormComponente from './FormComponente';



function ListaDeTareas() {

  const tareasIniciales = JSON.parse(localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")) : [];
  

  const [tareas, setTareas] = useState(tareasIniciales);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }


  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
    setTareas(tareasActualizadas);
  }

  const enProcesoTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id=== id){
        tarea.procesada = !tarea.procesada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);

  }

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id=== id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  
  useEffect(() =>{
  localStorage.setItem("tareas",JSON.stringify(tareas))  
  },[tareas])
  return (
    <>
      <FormComponente onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              procesada={tarea.procesada}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
              enProcesoTarea={enProcesoTarea}
            />
          )

        }
      </div>
    </>
  );

}

export default ListaDeTareas;
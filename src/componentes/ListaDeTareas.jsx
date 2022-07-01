import '../App.css';
import Tarea from './Tarea';
import FormComponente from './FormComponente';
import useManejarTareas from './useManejarTareas';



function ListaDeTareas() {
  const{tareas,
    agregarTarea,
    enProcesoTarea,
    eliminarTarea,
    completarTarea} = useManejarTareas();
  
  return (
    <>
      <FormComponente onEnvio={agregarTarea} />
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
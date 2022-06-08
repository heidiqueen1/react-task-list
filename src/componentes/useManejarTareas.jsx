import { useEffect, useState} from 'react';

const useManejarTareas = () => {
  const tareasIniciales = JSON.parse(localStorage.getItem("tareas"))
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  const [tareas, setTareas] = useState(tareasIniciales);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    let confirmar = 'confirmo';
    if(prompt("¿Estas seguro de querer eliminar la tarea? Digite 'confirmo' en caso de ser afirmativo o 'cancelo' en caso de ser negativo") === confirmar){
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id); 
      
    setTareas(tareasActualizadas);} 
  };

  const enProcesoTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.procesada = !tarea.procesada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return {
    tareas,
    agregarTarea,
    enProcesoTarea,
    eliminarTarea,
    completarTarea,
  };
};

export default useManejarTareas;

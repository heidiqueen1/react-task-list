import { useEffect, useState} from 'react';
import {dataTaskList} from '../firebase-config';
import {collection, getDocs, addDoc} from 'firebase/firestore';

const useManejarTareas = () => {

  let tareasBaseDatos = [];

  const readDocuments= async() => {
    try{
      const querySnapshop = await getDocs(collection(dataTaskList, "Tareas"));
      tareasBaseDatos = querySnapshop.docs.map((doc) => {
        return {
          id : doc.id,
          ...doc.data(),
        } 
      })
      setTareas(tareasBaseDatos);
      console.log(tareasBaseDatos);
    }catch(error){
          console.log (error);

        }
  };
  useEffect(()=>{
    readDocuments();
  },[]);

  const addDocument = async (tareaNueva) => {
    try{ 
      const docRef= await addDoc(collection(dataTaskList, "Tareas"),tareaNueva)
      const tareaNuevaConId = {...tareaNueva, id:docRef.id}
      const tareasActualizadas =  [tareaNuevaConId, ...tareas];
      setTareas(tareasActualizadas);

    }catch(error){
      console.log (error);
    }
  };

  /*const tareasIniciales = JSON.parse(localStorage.getItem("tareas"))
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];*/

    

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tareaNueva) => {
    if (tareaNueva.texto.trim()) {
      tareaNueva.texto = tareaNueva.texto.trim();
      addDocument(tareaNueva);
    
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

  // useEffect(() => {
  //   localStorage.setItem("tareas", JSON.stringify(tareas));
  // }, [tareas]);

  return {
    tareas,
    setTareas,
    agregarTarea,
    enProcesoTarea,
    eliminarTarea,
    completarTarea,
  };
};

export default useManejarTareas;

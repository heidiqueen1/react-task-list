import './App.css';
import Logo from './componentes/Logo.jsx';
import EstatusTareas from './componentes/EstatusTareas.jsx';




function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logo />
    <div className='tareas-lista-principal'>
     
     <div>
     <EstatusTareas 
      estatus = 'To Do'
      />
     </div>
     </div>
     </div>      
    
  );
}

export default App;

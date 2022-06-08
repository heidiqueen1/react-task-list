import "./App.css";
import Logo from "./componentes/Logo.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Task from "./Pages/Task.jsx";

function App() {
  return (
    <Router>
      <nav>
        <button className='tarea-boton-nav'><Link className="link" to='/'> Home </Link></button>
        <button className='tarea-boton-nav'><Link className="link" to='/profile'> Profile </Link></button>
        <button className='tarea-boton-nav'><Link className="link" to='/task'> Task </Link></button>
      </nav>
      <div className="aplicacion-tareas">
        <Logo />
        <div className="tareas-lista-principal">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

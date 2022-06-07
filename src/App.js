import "./App.css";
import Logo from "./componentes/Logo.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Task from "./Pages/Task.jsx";

function App() {
  return (
    <Router>
      <div className="aplicacion-tareas">
        <Logo />
        <div className="tareas-lista-principal">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task status= "To Do" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

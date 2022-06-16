import "./App.css";
import Logo from "./componentes/Logo.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Task from "./Pages/Task.jsx";
import { Box, Button, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box
        color="#ffff"
        bg="#8FD8D2"
        fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
        pt="20px"
        minH="100vh"
      >
        <nav>
        <Stack direction='row' spacing={40} align='center' justifyContent='center' m='40px'>
          <Button  size="lg" color="bisque" variant='outline'>
            <Link className="link" to="/">
              {" "}
              Home{" "}
            </Link>
          </Button>
          <Button  size="lg" color="bisque" variant='outline'>
            <Link className="link" to="/profile">
              {" "}
              Profile{" "}
            </Link>
          </Button>
          <Button  size="lg" color="bisque" variant='outline' >
            <Link className="link" to="/task">
              {" "}
              Task{" "}
            </Link>
          </Button>
          </Stack>
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
      </Box>
    </Router>
  );
}

export default App;

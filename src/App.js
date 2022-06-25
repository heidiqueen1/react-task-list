import "./App.css";
import Logo from "./componentes/Logo.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Task from "./Pages/Task.jsx";
import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from "./componentes/ToggleColorMode.jsx";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebase-config";
import { useState } from "react";

function App() {
  const bg = useColorModeValue("gray.800", "#8FD8D2");
  const [errorMessage, setErrorMessage] = useState("");

  const iniciarSesion = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(`bienvenido ${userCredentials.user.displayName}`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <Router>
      <Box
        color="#ffff"
        bg={bg}
        fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
        pt="20px"
        minH="100vh"
        aling="center"
        justifyContent="center"
      >
        <nav>
          <Stack
            direction="row"
            spacing={40}
            align="center"
            justifyContent="center"
            m="40px"
          >
            <Button size="lg" color="bisque" variant="outline">
              <Link className="link" to="/">
                Home
              </Link>
            </Button>
            <Button size="lg" color="bisque" variant="outline">
              <Link className="link" to="/profile">
                Profile
              </Link>
            </Button>
            <Button size="lg" color="bisque" variant="outline">
              <Link className="link" to="/task">
                Task
              </Link>
            </Button>
          </Stack>
        </nav>
        <div className="aplicacion-tareas" align="center" direction="row"  justifyContent="center">
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
            <ToggleColorMode />
          </div>
          
        </div>
        <button className="tarea-boton-home" onClick={iniciarSesion}>
            Login
          </button>
      </Box>
    </Router>
  );
}

export default App;

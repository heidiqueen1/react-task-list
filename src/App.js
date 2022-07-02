import "./App.css";
import Logo from "./componentes/Logo.jsx";
import PaginaError from "./componentes/PaginaError";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Task from "./Pages/Task.jsx";
import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from "./componentes/ToggleColorMode.jsx";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firebase-config";
import { useState } from "react";
import {user, useUser} from "./provider/UserProvider";
import {useEffect} from "react";

function App() {
  const bg = useColorModeValue("gray.800", "#8FD8D2");
  const [errorMessage, setErrorMessage] = useState("");
  const {user, setUser} = useUser();

  const iniciarSesion = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
  
    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        const usuarioLogueado = {
          name: userCredentials.user.displayName,
          userImage: userCredentials.user.photoURL,
        }
        setUser(usuarioLogueado);
       localStorage.setItem("userCredentials", JSON.stringify(usuarioLogueado));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const cerrarSesion = () =>{
    localStorage.removeItem("userCredentials");
    setUser({});
  };

  useEffect(() => {
    console.log(`welcome ${user.name} ${user.userImage}`);
  }, [user]);


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
            <>
            <img src={user.userImage} alt="user profile" />
            {user.name && <p>{user.name}</p>}
            </>
            <button className="tarea-boton-home" onClick={iniciarSesion}>
            Login
          </button>
          <button className="tarea-boton-home" onClick={cerrarSesion}>
            Logout
          </button>

          </Stack>
        </nav>
        <div className="aplicacion-tareas" >
          <Logo />
          <div className="tareas-lista-principal">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/task" element={ user.name ? <Task /> : <PaginaError />} />
                <Route path="/paginaerror" element={<PaginaError />} />
              </Routes>
            </div>
            <ToggleColorMode />
          </div>
          
        </div>
        
      </Box>
      
    </Router>
  );
}

export default App;

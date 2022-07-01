import {createContext, useContext } from 'react';
import { useState } from 'react';


const userContextDefaultValue = {
    user:  { name:"", userImage: "" },
    setUser:  (user)=> user,
};
const verificarUsuario = JSON.parse(localStorage.getItem("userCredentials"))
? JSON.parse(localStorage.getItem("userCredentials"))
:{};

const userContext = createContext(userContextDefaultValue);

export const UserProvider = ({children})=>{
    const [user, setUser] = useState (verificarUsuario);
    const value ={
        user,
        setUser,
    };
    return <userContext.Provider value={value}>{children}</userContext.Provider>
};

export const useUser = () => {
    const context = useContext(userContext);
    return context; 
};
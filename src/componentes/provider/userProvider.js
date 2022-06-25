import {createContext, useContext, useState } from 'react';


const userContextDefaultValue = {
    user:  { nam:"", userImage: "" },

};

const userContext = createContext(userContextDefaultValue);

export const userProvider = ({children})=>{
    const [user, setUser] = useState ({});
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
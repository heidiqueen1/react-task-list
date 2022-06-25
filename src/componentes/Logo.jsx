import React from 'react';
import logo from '../imagenes/logo.jpg';
import '../App.css';

function Logo(){
    return(
        <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo-app' 
        alt='logo-lapiz'
        />
      </div>
    )
}

export default Logo;
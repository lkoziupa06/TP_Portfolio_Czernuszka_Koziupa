import React from 'react';
export const Boton = ({link, nombre}) =>{
    return(
        <a class="btn btn-primary shadow-sm mt-1 hover-effect" href = {link}>{nombre}</a>
    );
}
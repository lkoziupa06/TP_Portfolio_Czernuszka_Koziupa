import React from 'react';
import { BotonRedes } from "../../components/BotonRedes";
import logoLinkedin from "../../images/logo_linkedin.png";
import logoGithub from "../../images/logo_github.png";
import dibujo from "../../images/hello3.svg"
import { Boton } from '../../components/Boton';

const Inicio = () => {
    return(
        <>
            <img src = {dibujo} alt = "dibujo"/>
            <p>Hola!</p>
            <p>Somos Tomas Czernuszka y Lucas Koziupa</p>
            <p>Somos estudiantes de ORT de la especialidad Informatica</p>

            <BotonRedes link = "https://www.linkedin.com/" imagenSrc={logoLinkedin}/>
            <BotonRedes link = "https://github.com/Chulusca?tab=repositories" imagenSrc={logoGithub}/>

            <Boton link = "" nombre = "Contactame!"/>
            
        </>
    )
}

export default Inicio
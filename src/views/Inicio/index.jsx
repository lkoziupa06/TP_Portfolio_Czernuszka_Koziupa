import React from 'react';
import { BotonRedes } from "../../components/BotonRedes";
import logoLinkedin from "../../images/logo_linkedin.png";
import logoGithub from "../../images/logo_github.png";
import dibujo from "../../images/hello3.svg"
import { Boton } from '../../components/Boton';
import './index.css';
import Navbar from '../../components/Navbar';

const Inicio = () => {
    return(
        <>
            <Navbar/>
            <div class = "cover bg-light">
                <img src = {dibujo} alt = "dibujo"/>
                <p class="lead text-uppercase mb-1">Hola!</p>
                <p>Somos Tomas Czernuszka y Lucas Koziupa</p>
                <p>Somos estudiantes de ORT de la especialidad Informatica</p>

                <BotonRedes link = "https://www.linkedin.com/" imagenSrc={logoLinkedin}/>
                <BotonRedes link = "https://github.com/Chulusca?tab=repositories" imagenSrc={logoGithub}/>

                <Boton link = "" nombre = "Contactame!"/>
            </div>  
        </>
    )
}

export default Inicio
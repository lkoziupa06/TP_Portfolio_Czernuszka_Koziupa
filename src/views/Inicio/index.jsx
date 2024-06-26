import React from 'react';
import { BotonRedes } from "../../components/BotonRedes";
import logoLinkedin from "../../images/logo_linkedin.png";
import logoGithub from "../../images/logo_github.png";
import logoBehance from "../../images/logo_behance.png";
import dibujo from "../../images/hello3.svg"
import { Boton } from '../../components/Boton';
import './index.css';
import NavBar from '../../components/Navbar';

const Inicio = () => {
    return(
        <>
            <div class = "cover bg-light">
                <NavBar/>
                <div class="container px-3 mt-5">
                    <div class = "cover bg-light" >
                        <div class="row">
                            <div class="col-lg-6 p-2">
                                <img src = {dibujo} alt = "dibujo"/>
                            </div>
                            <div class="col-lg-6">
                                <p class="lead text-uppercase mb-1">Hola!</p>
                                <h1 class="intro-title marker" >Somos Tomas Czernuszka, Lucas Koziupa y Thiago Palachi</h1>
                                <p class="lead fw-normal mt-3">Somos estudiantes de ORT de la especialidad Informatica</p>

                                <div class="social-nav aos-init aos-animate nav justify-content-left">
                                    <BotonRedes link = "https://www.linkedin.com/" imagenSrc={logoLinkedin}/>
                                    <BotonRedes link = "https://github.com/Chulusca?tab=repositories" imagenSrc={logoGithub}/>
                                    <BotonRedes link = "https://cafecito.app/chulusca" imagenSrc={logoBehance}/>
                                </div>
                                <div class="mt-5">
                                    <Boton link = "#Contacto" nombre = "Contactame!"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio
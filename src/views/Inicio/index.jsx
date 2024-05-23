import React from 'react';
import { BotonRedes } from "../../components/BotonRedes";
import logoLinkedin from "../../images/logo_linkedin.png";
import logoGithub from "../../images/logo_github.png";
import dibujo from "../../images/hello3.svg"
import { Boton } from '../../components/Boton';
import './index.css';
import NavBar from '../../components/Navbar';
import 'index.css'


const Inicio = () => {
    return(
        <>
            <NavBar/>
            <div class = "cover bg-light">
                <div class="container px-3">
                    <div class = "mt-5 cover bg-light" >
                        <div class="row">
                            <div class="col-lg-6 p-2">
                                <img src = {dibujo} alt = "dibujo"/>
                            </div>
                            <div class="col-lg-6">
                                <p class="lead text-uppercase mb-1">Hola!</p>
                                <h1 class="intro-title marker aos-init aos-animate" >Somos Tomas Czernuszka y Lucas Koziupa</h1>
                                <p class="lead fw-normal mt-3 aos-init aos-animate">Somos estudiantes de ORT de la especialidad Informatica</p>

                                <div class="social-nav aos-init aos-animate nav justify-content-left">
                                    <BotonRedes link = "https://www.linkedin.com/" imagenSrc={logoLinkedin}/>
                                    <BotonRedes link = "https://github.com/Chulusca?tab=repositories" imagenSrc={logoGithub}/>
                                </div>
                                <div class="mt-5">
                                    <Boton link = "" nombre = "Contactame!"/>
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
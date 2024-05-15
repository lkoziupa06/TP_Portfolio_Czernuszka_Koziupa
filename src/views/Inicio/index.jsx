import React from 'react';
import { BotonRedes } from "../../components/BotonRedes";

const Inicio = () => {
    return(
        <>
            <p>Hola!</p>
            <p>Somos Tomas Czernuszka y Lucas Koziupa</p>
            <p>Somos estudiantes de ORT de la especialidad Informatica</p>

            <BotonRedes link = "https://www.linkedin.com/" nombre = "Linkedin"/>
            <BotonRedes link = "https://github.com/Chulusca?tab=repositories" nombre = "GitHub"/>
        </>
    )
}

export default Inicio
import Card from "../../components/Card";
import imgApp from "../../images/app-development.svg";
import imgUxUi from "../../images/ui-ux.svg";
import imgWeb from "../../images/web-programming.svg";
import imgAlgoritmo from "../../images/algorithm.svg";
const Experiencia = () =>{
    return(
        <>
            <div class="container-narrow">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Experiencia</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Card titulo = "Autos Al Rio" locacion="Escuela ORT" duracion = "2024" imagen = {imgWeb} texto = ""/>
                    </div>
                    <div class="col-md-6">
                        <Card titulo = "Save & Savor" locacion="Escuela ORT" duracion = "2024" imagen = {imgApp} texto = ""/>
                    </div>
                    <div class="col-md-6">
                        <Card titulo = "UX/UI Challenge" locacion="Escuela ORT" duracion = "2023" imagen = {imgUxUi} texto = ""/>
                    </div>
                    <div class="col-md-6">
                        <Card titulo = "Young Entrepreneurship Program" locacion="Escuela ORT" duracion = "2023" imagen = {imgAlgoritmo} texto = ""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiencia
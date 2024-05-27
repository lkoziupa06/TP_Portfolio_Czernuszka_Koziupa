import Card from "../../components/Card"
import imgORT from "../../images/logo_ort.png";
import imgSUDA from "../../images/logo_suda.png";

const Educacion = () =>{
    return(
        <>
            <div class="container-narrow my-5">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Experiencia</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Card titulo = "Escuela Primaria" locacion = "Instituto Sudamericano Modelo" duracion = "2013-2019" imagen = {imgSUDA} texto = ""/>
                    </div>
                    <div class="col-md-6">
                        <Card titulo = "Bachiller Técnico con orientación en Informática" locacion = "Escuela ORT" duracion = "2020-2024" imagen = {imgORT} texto = ""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Educacion
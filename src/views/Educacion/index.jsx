import Card from "../../components/Card"
import imgORT from "../../images/logo_ort.png";
import imgSUDA from "../../images/logo_suda.png";

const Educacion = () =>{
    return(
        <>
            <div id="Educacion">
                <div class="container-narrow my-5 mx-5 pt-4 px-3 px-lg-4">
                    <div class="text-center mb-5">
                        <h2 class="marker marker-center">Educacion</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Card titulo = "Escuela Primaria" locacion = "Instituto Sudamericano Modelo" duracion = "2013-2019" imagen = {imgSUDA} texto = "Recibimos educación de nivel primario bilingüe desde los 6 años hasta los 13 cuando nos egresamos del colegio."/>
                        </div>
                        <div class="col-md-6">
                            <Card titulo = "Bachiller Técnico con orientación en Informática" locacion = "Escuela ORT" duracion = "2020-2024" imagen = {imgORT} texto = "Recibimos educación de nivel secundario. Elegimos la orientación de informática por lo que nos egresamos con un título de bachiller en la misma."/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Educacion
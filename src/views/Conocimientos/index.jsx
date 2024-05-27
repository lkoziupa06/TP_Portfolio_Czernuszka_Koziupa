import ImagenTexto from "../../components/ImagenTexto"
import imgApp from "../../images/app-development.svg";
import imgUxUi from "../../images/ui-ux.svg";
import imgWeb from "../../images/web-programming.svg";


const Conocimientos = () =>{
    return(
        <>
        <div id="Conocimientos">
            <div class="container-narrow mt-5 mb-5">
                    <div class="text-center mb-5">
                        <h2 class="marker marker-center">Conocimientos</h2>
                    </div>
                    <div class="row py-3 justify-content-center">
                        <div class="col-md-3 text-center">
                            <ImagenTexto imagen = {imgApp} texto = "Desarrollo Movil"/> 
                        </div>
                        <div class="col-md-3 text-center">
                            <ImagenTexto imagen = {imgUxUi} texto = "UX/UI"/>
                        </div>
                        <div class="col-md-3 text-center">
                            <ImagenTexto imagen = {imgWeb} texto = "Desarrollo Web"/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Conocimientos
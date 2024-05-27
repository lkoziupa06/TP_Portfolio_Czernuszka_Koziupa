import Form from "../../components/Form"
import { Item } from "../../components/Item"

const Contacto = () =>{
    return(
        <>
            <div class="container-narrow my-5">
                <div class="text-center mb-5">
                    <h2 class="marker marker-center">Contacto</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        
                    </div>
                    <div class="col-md-6">
                        <div class="mt-3 px-1">
                            <div class="h5">Sigamos en contacto!</div>
                            <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
                            <p>¡Gracias por visitar mi sitio web!</p>
                            <Item item = "Email" contenido = "lucasytomas@gmail.com"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto
import Form from "../../components/Form"
import { Item } from "../../components/Item"

const Contacto = () =>{
    return(
        <>
            <div id="Contacto">
                <div class="container-narrow my-5 mx-5 pt-4 px-3 px-lg-4 mt-5">
                    <div class="text-center mb-5">
                        <h2 class="marker marker-center">Contacto</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="bg-light my-2 p-3 pt-2">
                                <Form link = "mailto:czernuszkatomas@gmail.com?Subject=Mensaje%20"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mt-3 px-1">
                                <div class="h5">Sigamos en contacto!</div>
                                <p>Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal</p>
                                <p>¡Gracias por visitar mi sitio web!</p>
                                <Item item = "Email" contenido = "lucastomasythiago@gmail.com"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto
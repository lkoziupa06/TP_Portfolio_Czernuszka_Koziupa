import { Item } from "../../components/Item"
import imgNosotros from "../../images/los_hermosos.jpeg"

const AcercaDeMi = () => {
    return(
        <> 
        <div id="AcercaDeMi">
            <div class="section pt-4 px-3 px-lg-4 mt-3 mb-5 mx-5">
                <div class="container-narrow">
                    <div class="row">
                        <div class="col-md-6 ms-md-3 mt-5">
                            <h2 class="h4 my-2">Hola! Somos Tomas Czernuszka, Lucas Koziupa y Thiago Palachi</h2>
                            <p>Somos estudiantes de quinto año de la Escuela ORT de la orientacion de informatica.</p>
                            <div class="row mt-3">
                                <ul>
                                    <Item item = "Edad" contenido = "17 años"/>
                                    <Item item = "Email" contenido = "lucastomasythiago@gmail.com"/>
                                </ul>
                            </div>
                            <p>Comunicamos nuestros pensamientos e intenciones de una manera clara y eficiente. Además, contamos con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.</p>
                        </div>
                        <div class="col-md-5 ms-auto me-md-3">
                            <img class="avatar mt-2 rounded-circle" width={500} height={400} src = {imgNosotros} alt = "tomas, lucas y thiago"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AcercaDeMi
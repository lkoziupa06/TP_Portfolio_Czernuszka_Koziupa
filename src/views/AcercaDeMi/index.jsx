import { Item } from "../../components/Item"

const AcercaDeMi = () => {
    return(
        <> 
            <link href="./css/bootstrap-icons/bootstrap-icons.css?ver=1.2.0" rel="stylesheet"></link>
            <h1>Hola! Somos Tomas Czernuszka y Lucas Koziupa</h1>

            <p>Somos estudiantes de quinto año de la Escuela ORT de la orientacion de informatica.</p>

            <ul>
                <Item item = "Edad" contenido = "17 años"/>
                <Item item = "Email" contenido = "lucasytomas@gmail.com"/>
            </ul>

            <p>Comunicamos nuestros pensamientos e intenciones de una manera clara y eficiente. Además, contamos con muchas ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.</p>

            <img src = "" alt = "tomas y lucas"/>
        </>
    )
}

export default AcercaDeMi
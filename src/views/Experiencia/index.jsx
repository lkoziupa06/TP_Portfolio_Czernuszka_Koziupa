import Card from "../../components/Card";
import imgApp from "../../images/app-development.svg";
import imgUxUi from "../../images/ui-ux.svg";
import imgWeb from "../../images/web-programming.svg";
import imgAlgoritmo from "../../images/algorithm.svg";
import "./index.css"
const Experiencia = () =>{
    return(
        <>
        <div id="Experiencia">
            <div class="container-narrow my-5 mx-5 pt-4 px-3 px-lg-4">
                    <div class="text-center mb-5">
                        <h2 class="marker marker-center">Experiencia</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Card titulo = "Autos Al Rio" locacion="Escuela ORT" duracion = "2024" imagen = {imgWeb} texto = "Para nuestro proyecto final de cuarto año de programación junto a otros dos compañeros desarrollamos una página de compra y venta de autos usados. En este proyecto utilizamos el patrón de diseño MVC, incorporando lenguajes como C# y JavaScript para el backend, mientras que utilizamos HTML y CSS para el frontend. Además, utilizamos Microsoft SQL Server para la base de datos. Nuestro proyecto fue destacado por los profesores."/>
                        </div>
                        <div class="col-md-6">
                            <Card titulo = "Save & Savor" locacion="Escuela ORT" duracion = "2024" imagen = {imgApp} texto = "Para la materia de proyecto final de quinto año junto a otra compañera desarrollamos una aplicación móvil que permite a restaurantes y negocios publicar sus productos a final del día a un precio menor para reducir el desperdicio de alimentos y que las personas puedan acceder a los mismos bienes a menor precio. Además, si no son vendidos, estos son ofrecidos gratis a comedores comunitarios a través de la app. En este proyecto tuvimos una etapa de design thinking, luego de prototipado en Figma y finalmente de desarrollo utilizando Node."/>
                        </div>
                        <div class="col-md-6">
                            <Card titulo = "UX/UI Challenge" locacion="Escuela ORT" duracion = "2023" imagen = {imgUxUi} texto = "Fuimos elegidos en cuarto año para una competencia en la Universidad de Maimónides sobre User Experience y User Interface. Fuimos asignados los roles de UX y scrum master. En la universidad tuvimos varias clases acerca de los roles que fuimos asignados, además de tener tiempo para desarrollar un proyecto con las etapas del design thinking."/>
                        </div>
                        <div class="col-md-6">
                            <Card titulo = "Young Entrepreneurship Program" locacion="Escuela ORT" duracion = "2023" imagen = {imgAlgoritmo} texto = "Fuimos elegidos para una competencia de emprendedurismo en ingles en la que competimos con colegios de toda la red de ORT del hemisferio sur. En la competencia tuvimos diversas instancias: de marketing, de investigación, y finalmente de elaborar nuestra propia startup con un análisis de negocio y un prototipo. Nuestro emprendimiento se llamo BackOnTrack y era un dispositivo que te permitía corregir tu postura mientras caminas o incluso sentado. Obtuvimos el segundo lugar."/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Experiencia
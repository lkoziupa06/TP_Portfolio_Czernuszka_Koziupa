import { BotonRedes } from "../../components/BotonRedes";
import logoLinkedin from "../../images/logo_linkedin.png";
import logoGithub from "../../images/logo_github.png";
import logoBehance from "../../images/logo_behance.png";

const Footer = () =>{
    return(
        <>
            <footer class="pt-4 pb-4 text-center bg-light">
                <div class="container">
                    <div class="my-3">
                        <div class="h4">Lucas Koziupa, Tomas Czernuszka y Thiago Palachi</div>
                        <p>Estudiantes de Informatica de ORT</p>
                        <div class="social-nav">
                            <BotonRedes link = "https://www.linkedin.com/" imagenSrc={logoLinkedin}/>
                            <BotonRedes link = "https://github.com/Chulusca?tab=repositories" imagenSrc={logoGithub}/>
                            <BotonRedes link = "https://cafecito.app/chulusca" imagenSrc={logoBehance}/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
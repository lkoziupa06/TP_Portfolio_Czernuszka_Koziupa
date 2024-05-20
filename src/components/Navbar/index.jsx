import './index.css';
const Navbar = () =>{
    return(
        <>
        <div class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" id="header-nav" role="navigation"> 
            <ul class="navbar-nav ms-auto me-2">
                <li class="nav-item">
                    <a class = "nav-link" href = "" >Acerca de mi</a>
                </li>
                <li class="nav-item">
                    <a class = "nav-link" href = "" >Conocimientos</a>
                </li>
                <li class="nav-item">
                    <a class = "nav-link" href = "" >Experiencia</a>
                </li>
                <li class="nav-item">
                    <a class = "nav-link" href = "" >Educacion</a>
                </li>
                <li class="nav-item">
                    <a class = "nav-link" href = "" >Contacto</a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Navbar
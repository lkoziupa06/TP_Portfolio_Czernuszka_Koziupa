import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () =>{
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#">Koziupa, Czernuszka y Palachi</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link className= "nav-link" href="#home">Acerca de Mi</Nav.Link>
                <Nav.Link className= "nav-link" href="#features">Conocimientos</Nav.Link>
                <Nav.Link className= "nav-link" href="#pricing">Experiencia</Nav.Link>
                <Nav.Link className= "nav-link" href="#pricing">Educacion</Nav.Link>
                <Nav.Link className= "nav-link" href="#pricing">Contacto</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar

/*const Navbar = () =>{
    return(
        <>
        <div class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" id="header-nav" role="navigation"> 
            <div class = "container">
                <ul class="navbar-nav ms-auto me-2">
                    <li class="nav-item">
                        <a class = "nav-link" href = "https://www.linkedin.com/" >Acerca de mi</a>
                    </li>
                    <li class="nav-item">
                        <a class = "nav-link" href = "https://www.linkedin.com/" >Conocimientos</a>
                    </li>
                    <li class="nav-item">
                        <a class = "nav-link" href = "https://www.linkedin.com/" >Experiencia</a>
                    </li>
                    <li class="nav-item">
                        <a class = "nav-link" href = "https://www.linkedin.com/" >Educacion</a>
                    </li>
                    <li class="nav-item">
                        <a class = "nav-link" href = "https://www.linkedin.com/" >Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar */
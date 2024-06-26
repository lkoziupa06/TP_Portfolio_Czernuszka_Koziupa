import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () =>{
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#">Koziupa, Czernuszka y Palachi</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link className= "nav-link" href="#AcercaDeMi">Acerca de Mi</Nav.Link>
                <Nav.Link className= "nav-link" href="#Conocimientos">Conocimientos</Nav.Link>
                <Nav.Link className= "nav-link" href="#Experiencia">Experiencia</Nav.Link>
                <Nav.Link className= "nav-link" href="#Educacion">Educacion</Nav.Link>
                <Nav.Link className= "nav-link" href="#Contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
    
  );
}

export default NavBar


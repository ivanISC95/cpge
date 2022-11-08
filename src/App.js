import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ModalContacto from './Components/ModalContacto/ModalContacto';
import Inicio from './Components/Inicio/Inicio';
import Nosotros from './Components/Nosotros/Nosotros';
import cpge from './Assets/Img/CPGE.png';
import './App.css';
import Servicios from './Components/Servicios/Servicios';

function App() {

  return (
    <Router >
      <Navbar collapseOnSelect expand="lg">
        <Container >
          <Navbar.Brand as={Link} to='/'>
            <img
              alt="CPGE"
              src={cpge}
              width="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
              <Nav.Link as={Link} to='/Nosotros'>Nosotros</Nav.Link>
              <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to='Servicios/Licencia' >Licencia/Permisos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='Servicios/Dictamen'>Dictamenes/Factibilidad</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/Servicios/Servicios'>
                  Todos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <ModalContacto></ModalContacto>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='' element={<Inicio />} />
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<Inicio />} />
        <Route path='https://ivanisc95.github.io/' element={<Inicio />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Servicios/:id' element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;

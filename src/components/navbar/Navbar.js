import { Button, Container, Form, FormControl, Nav, Navbar as BTNavbar, NavDropdown, Offcanvas } from "react-bootstrap"
import FontAwesome from '../FontAwesome'

const Navbar = () => {
  return (
    <BTNavbar bg="light" expand={false}>
      <Container fluid>
        <BTNavbar.Brand href="#">My E-commerce</BTNavbar.Brand>
        <BTNavbar.Toggle aria-controls="offcanvasNavbar" />
        <BTNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">My E-commerce</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Productos</Nav.Link>
              <Nav.Link href="#action2">Ofertas</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2"><FontAwesome></FontAwesome></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </BTNavbar.Offcanvas>
      </Container>
    </BTNavbar>
  )
}
export default Navbar
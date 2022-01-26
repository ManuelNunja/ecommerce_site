import { Button, Container, Form, FormControl, Nav, Navbar as BTNavbar, NavDropdown, Offcanvas } from "react-bootstrap"
import FontAwesome from '../FontAwesome'

const Navbar = () => {
  return (
    <BTNavbar bg="light" expand={false}>
      <Container fluid>
        <BTNavbar.Brand href="#" className="menuBrand">
        <img
          alt=""
          src={require("../../../src/resources/icons/child.png")}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        My E-commerce
        </BTNavbar.Brand>
        <BTNavbar.Toggle aria-controls="offcanvasNavbar" />
        <BTNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="menuBrand">My E-commerce</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="menuitem"><FontAwesome iconName={"faHome"}></FontAwesome>&nbsp;&nbsp;Inicio</Nav.Link>
              <Nav.Link href="#action2" className="menuitem"><FontAwesome iconName={"faList"}></FontAwesome>&nbsp;&nbsp;Productos</Nav.Link>
              <Nav.Link href="#action3" className="menuitem"><FontAwesome iconName={"faTags"}></FontAwesome>&nbsp;&nbsp;Ofertas</Nav.Link>
              <Nav.Link href="#action4" className="menuitem"><FontAwesome iconName={"faShoppingCart"}></FontAwesome>&nbsp;&nbsp;Carrito de compras</Nav.Link>
              {/*<NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              </NavDropdown>
              */}
            </Nav>
          </Offcanvas.Body>
        </BTNavbar.Offcanvas>
      </Container>
    </BTNavbar>
  )
}
export default Navbar
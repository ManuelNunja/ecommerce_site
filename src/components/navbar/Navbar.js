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
              <Nav.Link href="#action2"><FontAwesome></FontAwesome>Carrito de Compras</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </BTNavbar.Offcanvas>
      </Container>
    </BTNavbar>
  )
}
export default Navbar
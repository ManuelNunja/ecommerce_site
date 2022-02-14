import { Button, Container, Form, FormControl, Nav, Navbar as BTNavbar, NavDropdown, Offcanvas } from "react-bootstrap";
import FontAwesome from '../FontAwesome';
import CartIcon from "../cartIcon/CartIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [stateDarkMode, setDarkMode] = useState(false);
  const encenderpagar = () => {
    setDarkMode(!stateDarkMode);
  }
  return (
    <BTNavbar fixed="top" bg="light" expand={false}>
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
        <div>
          <CartIcon></CartIcon>&nbsp;&nbsp;
          <BTNavbar.Toggle aria-controls="offcanvasNavbar" />
        </div>
        <BTNavbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="menuBrand">My E-commerce</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="menuitem"><FontAwesome iconName={"faHome"}></FontAwesome>&nbsp;&nbsp;<Link to="/">Inicio</Link></Nav.Link>
              <Nav.Link className="menuitem"><FontAwesome iconName={"faList"}></FontAwesome>&nbsp;&nbsp;<Link to="/ProductList">Productos</Link></Nav.Link>
              <Nav.Link className="menuitem"><FontAwesome iconName={"faTags"}></FontAwesome>&nbsp;&nbsp;<Link to="/ListSquareItemDetail">Detalle</Link></Nav.Link>
              <Nav.Link className="menuitem"><FontAwesome iconName={"faShoppingCart"}></FontAwesome>&nbsp;&nbsp;Carrito de compras</Nav.Link>
              <Nav.Link onClick={encenderpagar} className="menuitem"><FontAwesome iconName={"faLightbulb"}></FontAwesome>&nbsp;&nbsp;Dark Mode: {stateDarkMode ? " On" : " Off"}</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </BTNavbar.Offcanvas>
      </Container>
    </BTNavbar>
  )
}
export default Navbar
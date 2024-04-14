import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function NavBar() {

const cartProducts = useSelector ((state) => state.cart)

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand to="/">MY Shop</Navbar.Brand>

          <Nav>
            <Nav.Link to="/" as={Link}>
              All Products
            </Nav.Link>
            <Nav.Link to="/" as={Link}>
              Men
            </Nav.Link>
            <Nav.Link to="/" as={Link}>
              Women
            </Nav.Link>
            <Nav.Link to="/" as={Link}>
              Kids
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              Cart ( {cartProducts.length} )
            </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

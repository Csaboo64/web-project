import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Layout() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Sorsjegyek</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="masik">Leírás</Nav.Link>
            </Nav> 
          </Container>
        </Navbar>
        <Outlet></Outlet>   
      </>
    );
  }
export default Layout;
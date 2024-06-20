import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Service">Services</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

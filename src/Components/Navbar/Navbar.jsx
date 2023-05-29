import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../../Images/logo.png"
import "./Navbar.css"


function BasicExample() {
  return (
    <Navbar expand="lg" fixed="top" id="navbar">
      <Container fluid className='nav_container'>
        <img src={logo} width={50} height={45} />
        <Navbar.Brand id="link" href="#home" className="navbar-brand fw-bold fs-4">SHIV-TEMPLE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold  nav-link mx-auto mb-2 mb-lg-0" >
            <Nav.Link id="link" href="#Home">HOME</Nav.Link>
            <Nav.Link id="link" href="#About">ABOUT</Nav.Link>
            <Nav.Link id="link" href="#Event">FESTIVALS</Nav.Link>
            <Nav.Link id="link" href="#Contact">CONTACT</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#login"  >
              <Button variant="outline-secondary " className='right_btn fw-bold'>
                <i class="fa fa-sign-in me-1" aria-hidden="true"></i>
                LOGIN
              </Button>
            </Nav.Link>

            <Nav.Link eventKey={2} href="#Donate">
              <Button variant="outline-secondary" className='right_btn fw-bold' >
                <i class="fa fa-gift me-1 mt-1" aria-hidden="true" ></i>
                DONATE
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




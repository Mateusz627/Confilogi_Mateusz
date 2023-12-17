import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../scss/HomeBar.scss";

function HomeBar() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container className="custom-container">
          <div className="wrapper">
            <Navbar.Brand href="/">
              <img
                src="src\assets\logo-bookmark.svg"
                alt="logo"
                className="navbar-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="burger" />
          </div>
          <Navbar.Collapse id="me-auto-container">
            <Nav className="me-auto">
              <Nav.Link className="category" href="#FEATURES">
                FEATURES
              </Nav.Link>
              <Nav.Link className="category" href="#PRICING">
                PRICING
              </Nav.Link>
              <Nav.Link className="category" href="#CONTACT">
                CONTACT
              </Nav.Link>
              <Button variant="danger" className="login-button">
                LOGIN
              </Button>
              {""}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HomeBar;

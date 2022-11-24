import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    HEROES
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/home">Home</Link>
                    </Nav.Link>
                    {/* <Nav.Link>
                        <Link to="/newHeroe">New Heroe</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/deleteHero">Delete Hero</Link>
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );   
}

export default NavBar;
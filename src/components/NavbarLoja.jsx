import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLoja = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Loja</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Página Inicial</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarLoja
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RoundLogo from '/public/RoundLogo.png'


export default function NavbarComponent() {


    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className="navBar">
                <Container>
                    <Navbar.Brand href="#home"><img src={RoundLogo} className="NavLogo" alt="Logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#seeds">Shop Seeds</Nav.Link>
                        <Nav.Link href="#pricing">Planting Tips & Tricks</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}
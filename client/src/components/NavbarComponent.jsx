import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RoundLogo from '/src/RoundLogo.png'
import { useNavigate } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'


export default function NavbarComponent() {
    const navigate = useNavigate()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="navBar">
                <Container>
                    <Navbar.Brand href="#home"><img src={RoundLogo} className="NavLogo" alt="Logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/seeds')}>Shop Seeds</Nav.Link>
                        <Nav.Link onClick={() => navigate('/tips')}>Planting Tips & Tricks</Nav.Link>
                        <Nav.Link onClick={() => navigate('/contact')}>Contact Us</Nav.Link>
                        {/* <Nav.Link ><MdOutlineShoppingCart /></Nav.Link> */}
                        <Nav.Link onClick={() => navigate('/cart')} ><FaShoppingCart /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );

}
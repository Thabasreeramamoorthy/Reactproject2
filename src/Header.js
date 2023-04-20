import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Quotes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="https://www.google.com/search?q=quotes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiYhe-Z7rf-AhX17zgGHWhABF8Q_AUoAXoECAEQAw">More quotes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Header;
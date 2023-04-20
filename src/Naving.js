import Nav from 'react-bootstrap/Nav';

//</Nav.Item>
//<Nav.Item as="li">
//</Nav.Item>
//<Nav.Item as="li">
function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{padding:"10px"}}href="/home">Home</Nav.Link>
        <Nav.Link style={{padding:"10px"}}eventKey="link-1">About</Nav.Link>
        <Nav.Link style={{padding:"10px"}}eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ListExample;
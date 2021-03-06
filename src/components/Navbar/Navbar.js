import React from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNav";

export default function Header ({category1,category2,category3}) {
 
  const [text, setText] = React.useState("Este es nuestro valor inicial")
  const [count, setCount] = React.useState(0)
  const [products, setProducts] = React.useState([])
  
  const handleRest = () => {
    console.log("Ejecuto funcion")
    if(count > 0) {
      setCount( count - 1)
    }
  }
  
  React.useEffect(() => {
    alert("Clickeaste ")
  },[count])
  React.useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "Producto",
      },
      {
        id: 2,
        title: "Producto",
      },
    ]);
  },[])
  return (
    <>
      {}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">{category1}</Nav.Link>
              <Nav.Link href="#link">{category2}</Nav.Link>
              <Nav.Link href="#link">{category3}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {}
      <BottomNav />
      {text}
      <input
        type="button"
        value="CLICK AQUÍ"
        onClick={() => setText("Texto al clickear")}
      />
      <input type="button" value="+" onClick={() => setCount(count + 1)} />
      {count}
      <input type="button" value="-" onClick={handleRest} />
    </>
  );
}


import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  //state hook
  const data = [
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 0,
      productName: "Fancy Product",
      price: "$40.00 -",
      price1:" $80.00",
      rating: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sale: 1,
      productName: "Special Item",
      price2: "$20.00 ",
      price1:"$18.00",
      rating: 5,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 1,
      productName: "Sale Item",
      price2: "$50.00 ",
      price1:"$25.00",
      rating: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 1,
      productName: "Popular Item",
      price: "$40.00",
      rating: 5,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 0,
      productName: "Sale Item",
      price2: "$50.00 ",
      price1:"$25.00",
      rating: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 0,
      productName: "Fancy Product",
      price: "$120.00 -",
      price1:"$280.00",
      rating: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 1,
      productName: "Special Item",
      price2: "$20.00",
      price1: " $18.00",
      rating: 5,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        sale: 1,
      productName: "Popular Item",
      price: "$40.00",
      rating: 5,
    }
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <BasicExample
      cart={count}
      />
      <header className="header-part">
        <div className="heater-continar">
          <h1>Shop in style</h1>
          <p>With this shop hompeage template</p>
        </div>
      </header>


      <div className="card-container">
        {data.map((prod, idx) => <Cards
          key={idx} 
         idx={idx}
          prod={prod}
          setCount={setCount}
          count={count}
        />)}

      </div>
      <footer >
        <div className="footer-continar">
          <p>Copyright © Your Website</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Cards({ prod, idx, setCount, count }) {
  const [show, setShow] = useState(false);
  function addToCart() {
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart() {
    setShow(!show)
    setCount(count - 1)
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" className="image" src={prod.productImage} />
      {prod.sale>0 ? <span className="sale bg-dark text-white">sale</span>: ""}
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text><del>{prod.price2}</del>{prod.price}{prod.price1} </Card.Text>
        { prod.rating>0 ? <Card.Text><StarRating /></Card.Text>: ''}
        {/* conditional rendering */}
        {!show ? <Button
          variant="light"
          onClick={addToCart}
          className="button1"
        >Add to cart</Button> : ""}
        {show ? <Button
          variant="dark"
          onClick={removeFromCart}
          className="button1"
        >remove to cart</Button> : ""}

      </Card.Body>
    </Card>
  )
}
//navgatin bar
function BasicExample(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Popular Items</NavDropdown.Item>
              <NavDropdown.Item href="">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="d-flex" variant="outline-success">
        <i className="bi bi-cart-fill me-1"></i><span>Cart {props.cart}</span>
        </Button>
      </Container>
    </Navbar>
  );
}

function StarRating() {
  const [rating, setRating] = useState(5);
 
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (rating) ? "on" : "off"}>
            <span className="star">&#9733;</span>
          </button>
          
        );
      })}
    </div>
  );
}
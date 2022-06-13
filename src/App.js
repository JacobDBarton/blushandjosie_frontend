import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Container bg="dark">
      <Header cart={cart} />
      <Outlet
        context={{
          apiUrl: "https://blush-and-josie.herokuapp.com",
          cartState: [cart, setCart],
        }}
      />
      <Footer />
    </Container>
  );
}
export default App;

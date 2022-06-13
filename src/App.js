import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import createPersistedState from "use-persisted-state";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useCartState = createPersistedState("cart"); // allows a user to refresh the screen and not lose what's in the cart

function App() {
  const [cart, setCart] = useCartState([]);
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

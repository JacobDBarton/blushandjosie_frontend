import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container bg="dark">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
export default App;

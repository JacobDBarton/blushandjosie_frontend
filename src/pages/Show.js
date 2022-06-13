import { useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { addToCart } from "../utils";

function Show(props) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { apiUrl, cartState } = useOutletContext();
  const [, setCart] = cartState;

  useEffect(() => {
    const getProductsData = async () => {
      setLoading(true);
      const response = await fetch(`${apiUrl}/product/${params.id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProductsData();
  }, [apiUrl, params.id]);

  return loading || !product ? (
    <h1>Loading...</h1>
  ) : (
    <Container>
      <Row>
        <Col>
          <Image src={product.image} alt={product.name} rounded fluid />
        </Col>
        <Col>
          <div class="my-3 p-3">
            <h2 class="display-6">{product.name}</h2>
            <p class="lead">${parseInt(product.price, 10)}</p>
            <Button
              as={Link}
              to="/cart"
              variant="outline-dark"
              onClick={() => setCart((cart) => addToCart(cart, product))}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Show;

import React from "react";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartState } = useOutletContext();
  const [cart, setCart] = cartState;
  const removeFromCart = (id) => {
    setCart((cart) => cart.filter((product) => product._id !== id));
  };
  return (
    <>
      <div>Cart Page</div>
      {cart.map((product) => (
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${parseInt(product.price, 10)}</p>
          <Button
            variant="outline-danger"
            onClick={() => removeFromCart(product._id)}
          >
            Remove From Cart
          </Button>
        </div>
      ))}
      {cart.length > 0 ? (
        <p>
          Total: $
          {cart.reduce(
            (sumTotal, product) => sumTotal + parseInt(product.price, 10),
            0
          )}
        </p>
      ) : (
        <h1>Cart is empty!</h1>
      )}
    </>
  );
}

export default Cart;

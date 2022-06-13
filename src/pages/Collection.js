import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Button } from "react-bootstrap";
import { addToCart } from "../utils";

function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl, cartState } = useOutletContext();
  const [, setCart] = cartState;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${apiUrl}/product`);
      setProducts(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [apiUrl]);

  const loaded = () => {
    return (
      <div className="grid">
        {products.map((product, i) => {
          return (
            <div
              key={product._id}
              className={`product ${i % 7 === 0 ? "featured" : ""}`}
            >
              <Link
                to={`/products/${product._id}`}
                className="card text-center"
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title ">{product.name}</h5>
                  <p className="card-text lead fw-italic">${product.price}</p>
                  <Button
                    as={Link}
                    to="/cart"
                    variant="outline-dark"
                    onClick={() => setCart((cart) => addToCart(cart, product))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <div>{loading ? <h1>loading...</h1> : loaded()}</div>
      <div>
        <div className="policy">
          <h3>Policies:</h3>
          <h2>* US Shipping Only</h2>
          <h2>* Refund and Return Policy</h2>
          <p>
            Earring returns will be handled on a case by case basis. Please
            email blushandjosie@gmail.com for any order inquiries or
            refund/return requests for your earrings!
          </p>
          <h2>* Shipping policy</h2>
          <p>
            Please allow up to 4-7 business days for your item to be shipped.
          </p>
          <p>Business days are Monday-Friday excluding federal holidays.</p>
          <p>
            Once your product has left my possession and entered the possession
            of the US Postal Service or other shipping providers, I am no longer
            responsible for the item. You should contact USPS at +1 (800)
            275-8777 for any questions or updates concerning your package. You
            will need the tracking number provided by me, via e-mail when you
            purchased your item. If you do not enter an e-mail when purchasing
            your items, I have no way to send you this information. If you do
            not enter an e-mail and you need your tracking number, you can
            e-mail us at blushandjosie@gmail.com and we will see if we can fix
            your issue. There are no guarantees that we can give you a tracking
            number once it has left our production facility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;

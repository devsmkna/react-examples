import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { State } from "../../store";
import { Card } from "../Card/Card";

export const Cart = () => {
  const products = [
    {
      id: "ciao",
      name: "iphone 11",
    },
    {
      id: "a",
      name: "iphone 14",
    },
    {
      id: "b",
      name: "iphone 13",
    },
    {
      id: "c",
      name: "iphone 15",
    },
  ];

  const cart = useSelector((state: State) => state.cart.value);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 gap-4 mx-4">
      {products.map((product) => (
        <div>
          <Card title={product.name} description={product.id} />
          <div className="grid grid-cols-2 gap-2 mx-2">
            <button
              onClick={() => dispatch(addToCart(product.id))}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="btn btn-error"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      {cart.map((product) => (
        <Card title={product.id} description={product.quantity.toString()} />
      ))}
    </div>
  );
};

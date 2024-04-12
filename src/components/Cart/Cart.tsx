import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../redux/cartSlice";
import { State } from "../../redux";
import { Card } from "../Card/Card";
import { RemoveFromCartButton } from "../RemoveFromCartButton/RemoveFromCartButton";
import { Paginator } from "../Paginator/Paginator";
import { useProducts } from "../../hooks/useAPI";

export const Cart = () => {
  const cart = useSelector((state: State) => state.cart.value);
  const [products] = useProducts();
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="w-full h-[45vh] flex justify-center">
        <span className="self-end">Cart is empty.</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4">
      {cart.map((element) => {
        const product = products.find((p) => p.id.toString() === element.id);

        return (
          product && (
            <div key={element.id}>
              <Card title={product.title} mediaURI={product.image}>
                <Paginator
                  page={element.quantity}
                  nextPage={() => dispatch(addToCart(element.id))}
                  prevPage={() => dispatch(removeOneFromCart(element.id))}
                />
                <RemoveFromCartButton
                  handleClick={() => dispatch(removeFromCart(element.id))}
                />
              </Card>
            </div>
          )
        );
      })}
    </div>
  );
};

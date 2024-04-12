import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../redux/cartSlice";
import { State } from "../../store";
import { Card } from "../Card/Card";
import { RemoveFromCartButton } from "../RemoveFromCartButton/RemoveFromCartButton";
import { Paginator } from "../Paginator/Paginator";
import { useProducts } from "../../hooks/useAPI";

export const Cart = () => {
  const cart = useSelector((state: State) => state.cart.value);
  const [products] = useProducts();
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 gap-4 mx-4">
      {cart.map((element) => {
        const product = products.find((p) => p.id.toString() === element.id);

        return (
          product && (
            <div key={element.id}>
              <Card
                title={product.title}
                mediaURI={product.image}
                description={element.quantity.toString()}
              />
              <div className="flex flex-row-reverse justify-start gap-4">
                <RemoveFromCartButton
                  handleClick={() => dispatch(removeFromCart(element.id))}
                />
                <Paginator
                  currentPage={element.quantity}
                  nextPage={() => dispatch(addToCart(element.id))}
                  previousPage={() => dispatch(removeOneFromCart(element.id))}
                />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Card } from "../Card/Card";
import { ShoppingButton } from "../ShoppingButton/ShoppingButton";
import { useProducts } from "../../hooks/useAPI";

export const ECommerce = () => {
  const [products] = useProducts();
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
      {products.map((product) => (
        <div key={product.id}>
          <Card
            title={product.title}
            mediaURI={product.image}
          >
            <ShoppingButton
              handleClick={() => dispatch(addToCart(product.id.toString()))}
            />
          </Card>
          <div className="flex flex-row-reverse justify-start gap-4"></div>
        </div>
      ))}
    </div>
  );
};

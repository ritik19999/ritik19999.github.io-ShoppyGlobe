import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useEffect } from "react";
import ProductDetailsItems from "./ProductDetailItems";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../utils/cartSlice";

function ProductDetails({ handleCart }) {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  const dispatch = useDispatch();
  function handleCart(item) {
    dispatch(addToCart(item));
  }
  useEffect(() => {
    if (data) {
    }
  }, [data]);

  if (error) {
    return <p>Error in loading data..</p>;
  }
  if (loading) {
    return (
      <p className="text-center font-semibold pt-32 text-xl"> Loading......</p>
    );
  }
  const params = useParams();
  const item = data.filter((product) => params.id == product.id);

  return (
    <>
      {item.map((pro) => {
        return (
          <>
            <ProductDetailsItems
              product={pro}
              handleCart={handleCart}
            ></ProductDetailsItems>
          </>
        );
      })}
    </>
  );
}
export default ProductDetails;

import { Link } from "react-router-dom";
function ProductItem({ productDetails, handleCart }) {
  return (
    <>
      <div className="containerItem border-2 border-neutral-200 flex items-center justify-start flex-col rounded-md shadow-md pb-3 h-88 ">
        <Link to={`/product/${productDetails.id}`} key={productDetails.id}>
          <div className="itemContainer  border-2 border-neutral-200 flex items-center justify-start flex-col rounded-md shadow-md pb-3 h-88 ">
            <div className="productImage ">
              <img src={productDetails.thumbnail} />
            </div>
            <div className="productDetails w-56 flex flex-col  pt-5">
              <div className=" flex justify-between">
                <span className="text-xl font-semibold">
                  {productDetails.price}$
                </span>
                <span className="font-normal text-base">
                  ☆ {productDetails.rating}
                </span>
              </div>
              <h4>{productDetails.title}</h4>
            </div>
          </div>
        </Link>

        <button
          className="btn font-semibold pt-2"
          onClick={() => handleCart(productDetails)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
export default ProductItem;

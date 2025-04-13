import { Link } from "react-router-dom";
function productItems({ product, handleCart }) {
  return (
    <>
      <div className="containerItem border-2 border-neutral-200 flex justify-between rounded-md shadow-md items-center pb-3 h-88 mt-10">
        <div className="itemContainer ms-20 border-2 border-neutral-200 flex items-center justify-start flex-col rounded-md shadow-md pb-3 h-88 pt-10">
          <div className="productImage">
            <img src={product.images} width={400} height={400} />
          </div>
        </div>
        <div className="flex flex-col justify-end items-center mx-36">
          <div className="product ">
            <div className="">
              <p className="font-normal text-lg text-yellow-600">
                Ratings: ☆{product.rating}
              </p>
              <p className="text-2xl font-semibold">Price: {product.price}$</p>
              <h4 className="font-bold text-xl">{product.title}</h4>
              <h2 className="font-medium text-lg">Description:</h2>
              <h4>{product.description}</h4>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn font-semibold pt-2 border- bg-[#634141] text-white p-3 rounded-md w-40  mt-20 mx-auto"
        onClick={() => handleCart(product)}
      >
        Add To Cart
      </button>
      <Link to={"/shopall"} key={product.id} className=" my-5 mx-auto">
        <button className="btn font-semibold pt-2 border bg-[#634141] text-white p-3 rounded-md w-56">
          Go Back
        </button>
      </Link>
    </>
  );
}
export default productItems;

import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cartSlice";

function ProductList() {
  const dispatch = useDispatch();
  function handleCart(item) {
    dispatch(addToCart(item));
  }
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [search, setSearch] = useState();
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  //Using useEffect custom hook to fetch data from an api

  // inside the component...
  const cartItems = useSelector((state) => state.cart.items);
  console.log("🛒 Cart Items in Redux:", cartItems);
  useEffect(() => {
    if (data) {
      setFilteredProduct(data);
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

  // using below function to implement search functionality
  function handleSearch(e) {
    const item = data.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    setFilteredProduct(item);
  }
  return (
    <>
      <div className="w-screen mt-5">
        <div className="max-w-lg mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Dress, Beauty items..."
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <button
              className="text-white absolute end-2.5 bottom-2.5 bg-[#634141] hover:bg-[#634141] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#634141] dark:hover:bg-[#634141] dark:focus:ring-blue-800"
              onClick={(e) => handleSearch(e)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="productList flex flex-wrap gap-3 p-5 ms-8">
        {filteredProduct.length != 0 ? (
          filteredProduct.map((product) => (
            <ProductItem
              key={product.id}
              productDetails={product}
              handleCart={handleCart}
            />
          ))
        ) : (
          <div className="flex justify-center items-center flex-col m-auto">
            <p className="text-xl pt-11">
              Search result not matched any items..<br></br> Try Again.
            </p>
            <Link to={"/shopall"} className=" my-5 mx-auto">
              <button className="btn font-semibold pt-2 border bg-[#634141] text-white p-3 rounded-md w-56">
                Try Again
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default ProductList;

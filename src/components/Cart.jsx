import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  //getting store data
  const addCart = useSelector((store) => store.cart.items);
  const [cart, setCart] = useState(addCart);

  useEffect(() => setCart(addCart), [addCart]);

  return (
    <>
      {cart.length != 0 ? (
        cart.map((items) => <CartItem item={items} key={items.id} />)
      ) : (
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl pt-11">No Items Added Yet..</p>
          <Link to={"/shopall"} className=" my-5 mx-auto">
            <button className="btn font-semibold pt-2 border bg-[#634141] text-white p-3 rounded-md w-56">
              Go Shopping
            </button>
          </Link>
        </div>
      )}

      <div>
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>

          <div className="flex items-center justify-between gap-5 ">
            <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-[#634141] font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
              Promo Code?
            </button>
            <h6 className="font-manrope font-bold text-3xl lead-10 text-[#634141]">
              ${cart.price}
            </h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <Link to="/checkout">
            <button className="rounded-full py-4 px-6 bg-[#634141] text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-[#634141]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cart;

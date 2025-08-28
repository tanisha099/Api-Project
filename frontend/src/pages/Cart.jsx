import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../store/reducers/userSlice";

function Cart() {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  // Increase quantity
  const increaseQuantity = (index) => {
    const copyuser = { ...user, cart: [...user.cart] };
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(loadUsers(copyuser)); // update redux
  };

  // Decrease quantity
 const decreaseQuantity = (index) => {
  const copyuser = { ...user, cart: [...user.cart] };

  if (copyuser.cart[index].quantity > 1) {   // ✅ "i" ki jagah "1"
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity - 1,
    };

    dispatch(loadUsers(copyuser)); 
  } else {
    copyuser.cart.splice(index, 1);
    dispatch(loadUsers(copyuser));
  }
};


  return (
    <ul className="w-full mt-15 max-w-4xl mx-auto p-4 space-y-4">
      {user.cart.map((c, index) => (
        <li
          key={c.product.id}
          className="flex items-center justify-between gap-4 border rounded-xl p-4 shadow-sm bg-white"
        >
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src={c.product.image}
              alt={c.product.title}
              className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-lg"
            />
          </div>

          {/* Center: Title & Price */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 line-clamp-2">
              {c.product.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
  ₹{c.product.price * c.quantity}
</p>
          </div>

          {/* Right: Quantity buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(index)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              -
            </button>
            <span className="text-sm sm:text-base md:text-lg font-medium min-w-[20px] text-center">
              {c.quantity}
            </span>
            <button
              onClick={() => increaseQuantity(index)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white text-lg"
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Cart;

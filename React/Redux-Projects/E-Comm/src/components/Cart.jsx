import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../Store/cartSlice.jsx";

const Cart = ({ closeMenu }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qnty, 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      dispatch(clearCart());
      alert("Checkout complete! Your cart is now empty.");
      closeMenu(); // Close the menu on checkout
    } else {
      alert("Your cart is empty. Add items to proceed to checkout.");
    }
  };

  return (
    <div
      className="card_details d-flex flex-column"
      style={{ width: "25rem", padding: 15 }} // Increased width
    >

      {cart.length === 0 ? (
        <div className="text-center">
          <p style={{ fontSize: 22 }}>Your cart is empty...</p>
          <img
            src="./cart.gif"
            alt="Empty Cart"
            className="emptycart_img"
            style={{ width: "5rem", padding: 10 }}
          />
        </div>
      ) : (
        <div>
          <h3 className="text-center mb-3">My cart</h3>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex flex-column border-bottom pb-2 mb-2"
            >
              {/* Item image and name */}
              <div className="d-flex align-items-center mb-2">
                <img
                  src={item.imgdata} 
                  alt={item.rname}
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="ms-3">
                  <h5 className="m-0">{item.rname}</h5> {/* Full-width name */}
                  <p className="m-0">Price: Rs {item.price}</p>
                  <p className="m-0">Total: Rs {item.price * item.qnty}</p>
                </div>
              </div>
              {/* Controls */}
              <div className="d-flex justify-content-center align-items-center mt-2 gap-y-4">
                <div className="gap-8">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="btn btn-secondary btn-sm mx-1"
                  >
                    -
                  </button>
                  <span>{item.qnty}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="btn btn-secondary btn-sm mx-1"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="btn btn-danger btn-sm gap-8"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Total Price */}
          <h5 className="text-end">Total Price: Rs {totalPrice}</h5>
          <div className="text-center mt-3">
            <button onClick={handleCheckout} className="btn btn-primary btn-sm col-lg-6">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

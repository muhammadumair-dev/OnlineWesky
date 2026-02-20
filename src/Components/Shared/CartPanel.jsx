import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

function CartPanel() {
  const { cart, removeItem, isVisible, setIsVisible } = useContext(CartContext);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsVisible]);

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className={`w-80 absolute top-20 right-4 bg-white shadow-2xl p-4 rounded-lg transition-all duration-300 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}>
      {cart.map((item) => (
        <div key={item.id} className="flex gap-3 border-b pb-3 mb-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 object-cover"
          />

          <div className="flex-1">
            <h2 className="text-sm font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.quantity} × Rs {item.price}</p>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-gray-400 hover:text-black"
          >
            ✕
          </button>
        </div>
      ))}

      <div className="border-t pt-3">
        <h3 className="font-bold mb-4">
          Subtotal: Rs {subtotal}
        </h3>

        <button className="w-full bg-yellow-600 text-white py-2 mb-2">
          VIEW CART
        </button>

        <button className="w-full bg-yellow-600 text-white py-2">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPanel;

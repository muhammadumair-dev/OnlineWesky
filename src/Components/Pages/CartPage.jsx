import React, { useContext } from 'react';
import { CartContext } from '../Shared/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeItem, updateQuantity } = useContext(CartContext);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link>.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                  <th className="py-2"> </th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-4">€{item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">€{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4">
                      <button onClick={() => removeItem(item.id)} className="text-red-500">×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/" className="inline-block mt-6 text-yellow-600 hover:underline">
              ← Continue shopping
            </Link>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded">
            <h2 className="font-bold text-lg mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-yellow-600 text-white py-2 mb-2">Proceed to Checkout</button>
            <div className="mb-4">
              <label className="block text-sm mb-1">Coupon code</label>
              <input type="text" className="w-full border px-2 py-1" placeholder="Coupon code" />
              <button className="mt-2 w-full bg-gray-300 py-1">Apply coupon</button>
            </div>
            {/* placeholder for payment icons */}
            <div className="flex gap-2 justify-center">
              <div className="w-8 h-6 bg-gray-300" />
              <div className="w-8 h-6 bg-gray-300" />
              <div className="w-8 h-6 bg-gray-300" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

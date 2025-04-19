import { Plus, Minus, Trash2, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

function Cart() {
  const { cartItems, clearCart, increaseQty, decreaseQty } = useCart();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async () => {
    if (!name.trim()) return alert('Please enter your name.');

    const payload = {
      name,
      cartItems: cartItems.map(({ _id, quantity }) => ({
        productId: _id,
        quantity,
      })),
    };

    await API.post('/cart/checkout', payload);
    clearCart();
    navigate('/thank-you', { state: { name } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-green-600 flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div
                key={item._id}
                className="flex justify-between items-center p-4 border rounded-xl shadow-sm bg-gray-50"
              >
                <div>
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <div className="flex items-center gap-3 mt-1">
                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
                    >
                      <Minus className="w-4 h-4 text-gray-700" />
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item._id)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
                    >
                      <Plus className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>

                <span className="font-semibold text-gray-700">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg text-gray-800">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <User className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg transition font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <Trash2 className="w-12 h-12 mx-auto mb-2" />
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

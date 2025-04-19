import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBasket } from 'lucide-react';

function Store() {
  const { storeName } = useParams();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    API.get(`/products/${storeName}`).then(res => setProducts(res.data));
  }, [storeName]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className=" bg-gradient-to-br from-green-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">{storeName} - Products</h1>

        <div className="relative mb-6">
          <Search className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map(product => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">₹{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                >
                  <ShoppingBasket className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Store;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
function App() {
  return (
    <CartProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/:storeName" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

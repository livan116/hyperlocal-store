import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function ThankYou() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-100 flex flex-col items-center justify-center p-4 text-center">
      <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        Thank you, {state?.name || 'Customer'}!
      </h1>
      <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>
      <button
        onClick={() => navigate('/')}
        className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go Back to Home →
      </button>
    </div>
  );
}

export default ThankYou;

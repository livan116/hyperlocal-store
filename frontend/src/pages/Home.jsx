import { useEffect, useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/stores').then(res => setStores(res.data));
  }, []);

  return (
    <div className="p-4 bg-gradient-to-br from-green-50 to-white">
      <h1 className="text-3xl font-bold text-center mb-6">Hyperlocal Stores</h1>
      <div className="max-w-md mx-auto space-y-4">
        {stores.map(store => (
          <div
            key={store._id}
            className="p-4 bg-white rounded-xl shadow hover:bg-gray-50 cursor-pointer border"
            onClick={() => navigate(`/store/${encodeURIComponent(store.name)}`)}
          >
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-gray-600">{store.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

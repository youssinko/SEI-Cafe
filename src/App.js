import './App.css';
import { useState } from 'react'
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState({})


  return (
    <main className="App">
      {
        user ? 
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        : 
          <AuthPage />
      }
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import QRCodeComponent from './components/QRCodeComponent';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleItemSelect = (itemId, option) => {
    setSelectedItem({ itemId, option });
  };

  const handleOrderSubmit = (itemId, quantity, options) => {
    setOrders([...orders, { id: orders.length + 1, itemId, quantity, options, status: 'In attesa' }]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#FFD700' }}>
      <h1>Benvenuto al Ristorante</h1>
      <Menu onItemSelect={handleItemSelect} />
      {selectedItem && (
        <OrderForm 
          onSubmit={handleOrderSubmit} 
          options={selectedItem.option ? [selectedItem.option] : []} 
        />
      )}
      <OrderList />
      <QRCodeComponent url="https://your-vercel-deployment-url.com" />
    </div>
  );
};

export default App;

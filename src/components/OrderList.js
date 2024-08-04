import React, { useEffect, useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders from a backend or a static file
    const fetchOrders = async () => {
      try {
        // Replace with your actual API or static file path
        const response = await fetch('/orders.json');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Errore nel recupero degli ordini:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Lista Ordini</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Articolo</th>
            <th>Quantità</th>
            <th>Opzioni</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.itemId}</td>
              <td>{order.quantity}</td>
              <td>{order.options.join(', ')}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;

import React, { useState } from 'react';

const OrderForm = ({ onSubmit, options }) => {
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemId, quantity, selectedOptions);
  };

  return (
    <div>
      <h2>Effettua un Ordine</h2>
      <form onSubmit={handleSubmit}>
        <label>ID Articolo:</label>
        <input type="number" value={itemId} onChange={(e) => setItemId(e.target.value)} required />
        <label>Quantità:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
        <label>Opzioni:</label>
        <select multiple onChange={(e) => setSelectedOptions([...e.target.selectedOptions].map(option => option.value))}>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Invia Ordine</button>
      </form>
    </div>
  );
};

export default OrderForm;

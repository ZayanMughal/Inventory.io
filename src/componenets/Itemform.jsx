import React, { useState } from 'react';

function ItemForm({ addItem }) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && unit && price) {
      addItem({ name, unit, price });
      setName('');
      setUnit('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  className='inp'  type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input  className='inp' type="text" placeholder="Unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
      <input  className='inp' type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit  "  className='btn' >Add Item</button>
    </form>
  );
}

export default ItemForm;
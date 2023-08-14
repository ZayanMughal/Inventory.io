import React, { useState, useEffect } from 'react';
import ItemForm from './componenets/Itemform';
import ItemList from './componenets/Itemlist';
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    setItems(storedItems);
  }, []);

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  };

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    saveItemsToLocalStorage(newItems);
  };

  return (
    <div className='main'>
      <h1 className='hi' >Inventory Management</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
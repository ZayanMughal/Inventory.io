import React from 'react';

function ItemList({ items, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.unit} - ${item.price}
          <button  className='dlt' onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
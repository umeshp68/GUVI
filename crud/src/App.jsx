import React, { useState } from 'react';

const App = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  // State to store input value for adding/editing item
  const [inputValue, setInputValue] = useState('');
  // State to store the index of item being edited (or -1 if not editing)
  const [editIndex, setEditIndex] = useState(-1);

  // Function to handle adding or editing an item
  const handleAddEditItem = () => {
    if (inputValue.trim() === '') return; // Ignore empty input
    if (editIndex === -1) {
      // Add new item
      setItems([...items, inputValue]);
    } else {
      // Edit existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = inputValue;
      setItems(updatedItems);
      setEditIndex(-1); // Reset edit mode
    }
    setInputValue(''); // Clear input value
  };

  // Function to handle deleting an item
  const handleDeleteItem = index => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Function to handle editing an item
  const handleEditItem = index => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      {/* Input for adding/editing item */}
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {/* Button for adding/editing item */}
      <button onClick={handleAddEditItem}>
        {editIndex === -1 ? 'Add Item' : 'Edit Item'}
      </button>
      {/* List of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            {/* Button for deleting item */}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>{' '}
            {/* Button for editing item */}
            <button onClick={() => handleEditItem(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

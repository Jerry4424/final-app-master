import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import '../App.css';

function CartPage() {
  const { user, setUser } = useContext(UserContext);

  const handleRemoveItem = (itemName) => {
    setUser((prev) => {
      const updatedCart = prev.selectedItems.map((item) => {
        if (item.name === itemName) {
          // Decrease quantity if more than 1
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0); // Remove items with quantity 0

      return { ...prev, selectedItems: updatedCart };
    });
  };

  return (
    <div className="App-cart">
      <h2>Your Selected Items</h2>
      {user?.selectedItems?.length === 0 ? (
        <p>No items selected yet.</p>
      ) : (
        <ul className="App-cart-items">
          {user.selectedItems.map((item, index) => (
            <li key={index} className="App-cart-item">
              <span>{item.name} (x{item.quantity})</span>
              <button
                className="App-cart-remove-button"
                onClick={() => handleRemoveItem(item.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import '../App.css';

function OrderMaterialsPage() {
  const { user, setUser, services } = useContext(UserContext); // Use services from UserContext
  const [quantities, setQuantities] = useState({}); // Track quantities for each item

  const handleQuantityChange = (itemName, value, maxQuantity) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    if (maxQuantity === 0 || quantity <= maxQuantity) {
      setQuantities((prev) => ({
        ...prev,
        [itemName]: quantity,
      }));
    } else {
      alert(`You cannot order more than ${maxQuantity} of ${itemName}`);
    }
  };

  const handleSelectItem = (item) => {
    if (!user || !user.selectedItems) {
      console.error('User or selectedItems is undefined');
      return;
    }

    const quantity = quantities[item.name] || 1; // Default to 1 if no quantity is specified
    const existingItem = user.selectedItems.find((selectedItem) => selectedItem.name === item.name);

    if (existingItem) {
      // If the item already exists, increase its quantity
      const newQuantity = existingItem.quantity + quantity;
      if (item.maxQuantity === 0 || newQuantity <= item.maxQuantity) {
        setUser((prev) => ({
          ...prev,
          selectedItems: prev.selectedItems.map((selectedItem) =>
            selectedItem.name === item.name
              ? { ...selectedItem, quantity: newQuantity }
              : selectedItem
          ),
        }));
        alert(`${quantity} ${item.name}(s) added to cart`);
      } else {
        alert(`You cannot order more than ${item.maxQuantity} of ${item.name}`);
      }
    } else {
      // If the item doesn't exist, add it
      if (item.maxQuantity === 0 || quantity <= item.maxQuantity) {
        setUser((prev) => ({
          ...prev,
          selectedItems: [...prev.selectedItems, { name: item.name, quantity }],
        }));
        alert(`${quantity} ${item.name}(s) added to cart`);
      } else {
        alert(`You cannot order more than ${item.maxQuantity} of ${item.name}`);
      }
    }
  };

  return (
    <div className="App-order-materials">
      <h2>Order Materials</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="App-order-item">
            <span>{service.name}</span>
            <input
              type="number"
              min="1"
              value={quantities[service.name] || 1}
              onChange={(e) => handleQuantityChange(service.name, e.target.value, service.maxQuantity)}
              className="App-order-quantity-input"
            />
            <button
              className="App-order-button"
              onClick={() => handleSelectItem(service)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderMaterialsPage;

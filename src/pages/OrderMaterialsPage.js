import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import '../App.css'; // Import the CSS file for styling

function OrderMaterialsPage() {
  const { setUser } = useContext(UserContext);

  const services = ['Construction', 'Labor', 'Materials'];

  const handleOrder = (service) => {
    setUser(prev => ({
      ...prev,
      orders: [...prev.orders, service]
    }));
    alert(`Ordered: ${service}`);
  };

  return (
    <div className="App-order-materials">
      <h2>Order Services</h2>
      {services.map((service, index) => (
        <div key={index} className="App-order-item">
          <span>{service}</span>
          <button className="App-order-button" onClick={() => handleOrder(service)}>
            Order
          </button>
        </div>
      ))}
    </div>
  );
}

export default OrderMaterialsPage;

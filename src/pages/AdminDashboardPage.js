import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';
import '../App.css'; // Import the CSS file for styling

function AdminDashboardPage() {
  const { services, setServices } = useContext(UserContext); // Use services from UserContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newService, setNewService] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0); // Track max quantity for the new service

  // Hardcoded admin credentials
  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123';

  // Default services
  const defaultServices = [
    { name: 'Materials', maxQuantity: 0 }, // No limit
    { name: 'Labor', maxQuantity: 1 }, // Limit of 1
    { name: 'Packages', maxQuantity: 0 }, // No limit
  ];

  // Load login state and services from localStorage on component mount
  useEffect(() => {
    const savedLoginState = loadFromLocalStorage('isAdminLoggedIn', false);
    setIsLoggedIn(savedLoginState);

    const savedServices = loadFromLocalStorage('services', []);
    if (Array.isArray(savedServices) && savedServices.length > 0) {
      setServices(savedServices.filter((service) => service.name && service.name.trim() !== '')); // Filter out blank services
    } else {
      setServices(defaultServices); // Set default services if none are found
    }
  }, [setServices]);

  // Save services to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage('services', services);
  }, [services]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
      saveToLocalStorage('isAdminLoggedIn', true); // Save login state
    } else {
      alert('Invalid admin credentials!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    removeFromLocalStorage('isAdminLoggedIn'); // Clear login state
  };

  const handleAddService = () => {
    if (newService.trim() !== '') {
      setServices([...services, { name: newService.trim(), maxQuantity: parseInt(maxQuantity) || 0 }]);
      setNewService('');
      setMaxQuantity(0);
    } else {
      alert('Service name cannot be blank!');
    }
  };

  const handleRemoveService = (serviceName) => {
    setServices(services.filter((service) => service.name !== serviceName));
  };

  if (!isLoggedIn) {
    return (
      <div className="App-login">
        <h2 className="App-login-title">Admin Login</h2>
        <form className="App-login-form" onSubmit={handleLogin}>
          <div className="App-login-inline">
            <input
              className="App-login-input"
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="App-login-input"
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="App-login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="App-admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout} className="App-logout-button">
        Logout
      </button>
      <div className="App-admin-input">
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="New service name"
        />
        <input
          type="number"
          min="0"
          value={maxQuantity}
          onChange={(e) => setMaxQuantity(e.target.value)}
          placeholder="Max quantity (0 = no limit)"
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>

      <h3>Current Services</h3>
      <ul className="App-admin-services">
        {services.map((service, index) => (
          <li key={index} className="App-admin-service-item">
            {service.name} (Max: {service.maxQuantity === 0 ? 'No limit' : service.maxQuantity})
            <button onClick={() => handleRemoveService(service.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboardPage;

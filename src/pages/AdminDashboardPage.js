import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling

function AdminDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [services, setServices] = useState(['Construction', 'Labor', 'Materials']);
  const [newService, setNewService] = useState('');

  // Hardcoded admin credentials
  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid admin credentials!');
    }
  };

  const handleAddService = () => {
    if (newService.trim() !== '') {
      setServices([...services, newService.trim()]);
      setNewService('');
    }
  };

  const handleRemoveService = (service) => {
    setServices(services.filter(s => s !== service));
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
            <button className="App-login-button" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="App-admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="App-admin-input">
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="New service name"
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>

      <h3>Current Services</h3>
      <ul className="App-admin-services">
        {services.map((service, index) => (
          <li key={index} className="App-admin-service-item">
            {service}
            <button onClick={() => handleRemoveService(service)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboardPage;

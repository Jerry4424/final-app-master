import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling

function AdminDashboardPage() {
  const [services, setServices] = useState(['Construction', 'Labor', 'Materials']);
  const [newService, setNewService] = useState('');

  const handleAddService = () => {
    if (newService.trim() !== '') {
      setServices([...services, newService.trim()]);
      setNewService('');
    }
  };

  const handleRemoveService = (service) => {
    setServices(services.filter(s => s !== service));
  };

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

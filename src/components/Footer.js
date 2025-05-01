import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px' }}>
      <p>&copy; {new Date().getFullYear()} SolidBase Construction.</p>
    </footer>
  );
}

export default Footer;
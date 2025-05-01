import React from 'react';
import '../App.css'; // Import the CSS file for styling

function SpecialOfferCard({ offer }) {
  return (
    <div className="App-special-offer-card">
      <h4>{offer.title}</h4>
      <p>{offer.description}</p>
      <p>Discount: {offer.discount}</p>
      <button className="App-special-offer-button">View Offer</button>
    </div>
  );
}

export default SpecialOfferCard;
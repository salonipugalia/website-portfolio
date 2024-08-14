import React from 'react';
import './cards.css';

const Card = ({ title, content }) => {
  const handleClick = () => {
    alert(`Clicked on the "${title}" card`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <button className="button">Active Link</button>
      </div>
      <div className="card-overlay">
        <p>Overlay Content</p>
      </div>
    </div>
  );
};

export default Card;

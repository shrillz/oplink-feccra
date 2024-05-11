import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpLinkGuide = () => {
  const navigate = useNavigate();

  const handleOrientationClick = () => {
    // Navigate to the SorienterPage when the button is clicked
    navigate('/sorienter');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
  };

  const titleStyle = {
    fontSize: '3em',
    color: '#333',
    textAlign: 'center',
    marginTop: '3px',
  };

  const subtitleStyle = {
    fontWeight: 'bold',
    border: '1px solid #4B49AC', // Add border with color
    borderRadius: '6px', // Add border radius for rounded corners
    backgroundColor: '#4B49AC', // Add background color
    color: '#FFFFFF', // Set text color
    padding: '10px 20px', // Add padding
    margin: '20px 300px',
    display: 'block', // Set display to block to make buttons stack vertically
    width: '30%', // Set width to 100% to occupy full width
    
  };
  

  return (
    <div style={containerStyle}>
      <img src="/images/quizz.png" style={{ width: '700px', height: '100vh', float: 'left', margin: '0px' }} />
      <div>
        <h1 style={titleStyle}>Explorez votre Avenir, OpLink vous guide</h1>
        <button style={subtitleStyle} onClick={handleOrientationClick}>
          S'orienter
        </button>
        <button style={subtitleStyle} onClick={handleOrientationClick}>
          Découvrir vos opportunités
        </button>
      </div>
    </div>
  );
};

export default OpLinkGuide;

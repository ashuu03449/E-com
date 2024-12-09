"use client"
import React, { useState } from 'react';

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);  // Track hover state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
   
      <form onSubmit={handleSubmit} className='flex flex-col  md:flex-col lg:flex-row'>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        {/* Subscribe Button */}
        <button
          type="submit"
          onMouseEnter={() => setIsHovered(true)}  // Handle hover
          onMouseLeave={() => setIsHovered(false)} // Handle hover end
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : styles.buttonDefault)
          }}  // Apply hover style dynamically
        >
          Subscribe
        </button>
      </form>
    
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row',  // Align input and button in a row
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px', // Set max width for the form
  },
  input: {
    flex: 1,  // Make input take available space
    padding: '6px 8px',
    border: 'none',
    borderBottom: '2px solid #333', // Underline for the input field
    marginRight: '10px',  // Space between input and button
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '10px 10px',
    backgroundColor: 'transparent',  // Transparent background for a more consistent design with the input
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
    borderBottom: '2px solid transparent',  // Initial transparent underline for the button
  },
  buttonHover: {
    backgroundColor: '#444',
    borderBottom: '2px solid #fff',  // Solid underline when hovered
  },
  buttonDefault: {
    borderBottom: '2px solid #333',  // Solid underline when not hovered (like the input)
  }
};

export default SubscribeForm;

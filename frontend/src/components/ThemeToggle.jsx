import React, { useState } from 'react';
import './ThemeToggle.css'; // Import your CSS file for styles

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('white'); // Default theme is white

  const handleToggleChange = () => {
    const newTheme = theme === 'white' ? 'pinkblue' : 'white';
    setTheme(newTheme); // Toggle between themes
    onThemeChange(newTheme); // Pass the new theme to the parent
  };

  return (
    <div className="bauble_box">
      <input
        className="bauble_input"
        type="checkbox"
        id="themeToggle"
        onChange={handleToggleChange}
      />
      <label className="bauble_label" htmlFor="themeToggle"></label>
    </div>
  );
};

export default ThemeToggle;

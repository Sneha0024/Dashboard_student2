import React from 'react';
import '../styles/theme.css';

const ThemeProvider = ({ children }) => {
  return <div className="theme">{children}</div>;
};

export default ThemeProvider;

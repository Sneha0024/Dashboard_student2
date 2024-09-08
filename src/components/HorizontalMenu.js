import React from 'react';
import styles from '../styles/HorizontalMenu.module.css';

const HorizontalMenu = ({ onViewChange, currentView }) => {
  return (
    <nav className={styles.horizontalMenu}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.viewSwitcher}>
        <button 
          className={currentView === 'grid' ? styles.active : ''}
          onClick={() => onViewChange('grid')}
        >
           <i className="fas fa-grip-lines"></i>Grid View
        </button>
        <button 
          className={currentView === 'tile' ? styles.active : ''}
          onClick={() => onViewChange('tile')}
        > <i className="fas fa-grip-horizontal"></i>Tile View
        </button>
      </div>
    </nav>
  );
};

export default HorizontalMenu;

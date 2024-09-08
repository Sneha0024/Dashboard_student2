import React, { useState } from 'react';
import styles from '../styles/HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {/* <div className={styles.menuIcon}>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        <i className="fas fa-navicon"></i>
      </button>
      <nav className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li onClick={() => handleMenuItemClick(1)}>
            Menu Item 1
            {activeItem === 1 && (
              <ul>
                <li>Sub-item 1</li>
                <li>Sub-item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleMenuItemClick(2)}>
            Menu Item 2
            {activeItem === 2 && (
              <ul>
                <li>Sub-item 1</li>
                <li>Sub-item 2</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleMenuItemClick(3)}>
            Menu Item 3
            {activeItem === 3 && (
              <ul>
                <li>Sub-item 1</li>
                <li>Sub-item 2</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

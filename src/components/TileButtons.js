import React from 'react';
import styles from '../styles/TileButtons.module.css';

const TileButtons = () => {
  return (
    <div className={styles.buttons}>
      <button> <i className="fas fa-edit"></i>Edit</button>
      <button> <i className="fas fa-check"></i>Flag</button>
      <button> <i className="fas fa-trash"></i>Delete</button>
    </div>
  );
};

export default TileButtons;

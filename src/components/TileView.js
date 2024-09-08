import React, { useEffect, useState } from 'react';
import dataService from '../dataService';
import TileButtons from './TileButtons';
import styles from '../styles/TileView.module.css';

const TileView = ({ onTileClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataService.getData().then((responseData) => setData(responseData));
  }, []);

  return (
    <div className={styles.tileView}>
      {data.map((item) => (
        <div className={styles.tile} key={item.id} onClick={() => onTileClick(item)}>
          <h3>{item.name}</h3>
          <p>Email: <span className={styles.tile_info}>{item.email}</span></p>
          <p>Phone: <span className={styles.tile_info}>{item.phone}</span></p>
          <p>Website: <span className={styles.tile_info}>{item.website}</span></p>
          <TileButtons />
        </div>
      ))}
    </div>
  );
};

export default TileView;

import React, { useEffect, useState } from 'react';
import dataService from '../dataService';
import styles from '../styles/GridView.module.css';

const GridView = ({ onTileClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataService.getData().then((responseData) => setData(responseData));
  }, []);

  return (
    <div className={styles.gridView}>
      <table>
        <thead>
          <tr>
            <th><i className="fas fa-address-card"></i>Name</th>
            <th><i className="fas fa-envelope"></i>Email</th>
            <th><i className="fas fa-phone"></i>Phone</th>
            <th><i className="fas fa-globe"></i>Website</th>
            {/* Add other headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} onClick={() => onTileClick(item)}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridView;

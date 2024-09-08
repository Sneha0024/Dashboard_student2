import React from 'react';
import styles from '../styles/DetailView.module.css';
import '../styles/DetailView.module.css';
import userImg from './user-image.jpg'
const DetailView = ({ item, onBack }) => {
  if (!item) return null;

  return (
    // <div className={styles.detailView}>
    //   <button onClick={onBack}> <i className="fas fa-backward"></i> Back</button>
    //   <h2>{item.name}</h2>
    //   <p>Email: {item.email}</p>
    //   <p>Phone: {item.phone}</p>
    //   <p>Website: {item.website}</p>
    //   <p>Address: {item.address.street}, {item.address.city}</p>
    //   <p>Company: {item.company.name}</p>
    //   {/* Display more details as needed */}
    // </div>
 <div className="cards">
  <div className="card">
    <article>
      <h2>{item.name}</h2>
      <div className="title">{item.website}</div>
      <div className="pic"><img src={userImg}/></div>
      <div className="desc">{item.email}</div>
      <div className="desc">{item.phone}</div>

      <div className="desc">{item.address.street}, {item.address.city}</div>

    </article>
    <div className="actions">
      <button className="btn" onClick={onBack}><i className="fas fa-backward"></i>Back</button>
   
    </div>
  </div>
 </div>
  );
};

export default DetailView;

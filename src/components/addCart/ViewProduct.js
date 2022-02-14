import React from 'react';
import { Link } from 'react-router-dom';

const ViewProduct = ({productId, setSelectedItem}) => {
  const view = () => {
    setSelectedItem(productId)
  }
  return <div className='viewDetail' onClick={view}><Link className='textLink' to="/ListSquareItemDetail">View Detail</Link></div>;
};

export default ViewProduct;
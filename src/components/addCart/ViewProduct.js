import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const ViewProduct = ({productId}) => {
  const [stateProductDetail, setProductDetail] = useState([])
  const view = () => {
    setProductDetail(products.find(item => item.id===productId))
  }
  /* return <div className='viewDetail' onClick={view}><Link className='textLink' to="/ListSquareItemDetail">View Detail</Link></div>; */
  return <Link className='viewDetail' to="/ListSquareItemDetail" onClick={view}>View Detail</Link>
};
export default ViewProduct;
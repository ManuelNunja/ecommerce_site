import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const ViewProduct = ({productId, setSelectedItem}) => {
  const [stateProductDetail, setProductDetail] = useState([])
  const view = () => {
    setSelectedItem(productId)
    setProductDetail(products.find(item => item.id===productId))
    console.log(stateProductDetail)
  }
  /* return <div className='viewDetail' onClick={view}><Link className='textLink' to="/ListSquareItemDetail">View Detail</Link></div>; */
  return <Link className='viewDetail' to="/ListSquareItemDetail" onClick={view}>View Detail</Link>
};

export default ViewProduct;
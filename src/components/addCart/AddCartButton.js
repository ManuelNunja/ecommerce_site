import React from 'react';

const AddCartButton = ({productId, setSelectedItem}) => {
  const encenderpagar = () => {
    setSelectedItem(productId)
  }
  return <div className='addCartButton' onClick={encenderpagar}>Add Cart</div>;
};

export default AddCartButton;

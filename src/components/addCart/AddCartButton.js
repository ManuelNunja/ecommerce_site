import React from 'react';

const AddCartButton = ({productId, setSelectedItem}) => {
  const encenderpagar = () => {
    setSelectedItem(productId)
  }
  return <div className='addCartButton' onClick={encenderpagar}>Seleccionar</div>;
};

export default AddCartButton;

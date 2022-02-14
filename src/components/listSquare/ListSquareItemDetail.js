import React from 'react'
import ItemCounter from '../counter/ItemCounter'
import AddCartButton from '../addCart/AddCartButton'
import { Link } from 'react-router-dom';

const ListSquareItemDetail = (productId, productName, productDescription, productPrice, productBrand, productStock) => {
  return (
    <div className='listSquare--itemDetail'>
        <div className='listSquare--itemDetail--background' >
            <div className='name'>Product Name</div>
            <div className='brand'>Brand</div>
            <div className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur natus ipsam asperiores ipsum dolore deserunt fugiat impedit sed sapiente fuga nam corrupti laboriosam, nemo vitae id facere sequi autem.</div>
            <ItemCounter stock={10}></ItemCounter>
            <AddCartButton></AddCartButton>
            {/* <div>{productName}</div>
            <div>{productBrand}</div>
            <div>{productDescription}</div>
            <ItemCounter stock={productStock}></ItemCounter> */}
            {/* <div className='backButton'><Link className='textLink' to="/">Volver</Link></div> */}
            <Link className='backButton' to="/">Volver</Link>
        </div>
    </div>
  )
}

export default ListSquareItemDetail
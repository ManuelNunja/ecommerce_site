import { useState } from "react";
import AddCartButton from "../addCart/AddCartButton";
import ItemCounter from "../counter/ItemCounter";
import "./ListSquare.scss";


const ListSquareItem =({productId, productName, productPrice, productBrand}) => {
    const [selectedItem, setSelectedItem] = useState(null)    
    return <div className="listSquare--item">
        <div className="listSquare--item--name">{productName}</div>
        <ItemCounter stock={10}></ItemCounter>
        <AddCartButton productId={productId} setSelectedItem={setSelectedItem}></AddCartButton>
    </div>;
  };

export default ListSquareItem;

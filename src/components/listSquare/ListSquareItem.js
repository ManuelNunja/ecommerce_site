import { useState } from "react";
import ViewProduct from "../addCart/ViewProduct";
import "./ListSquare.scss";

/*const ListSquareItem =({productId, productName, productDescription, productPrice, productBrand, productStock}) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const texto = productDescription.substring(1, 55) + " ..."
    return <div className="listSquare--item">
        <div className="listSquare--item--name">{productName}</div>
        <div>{texto}</div>
        <ViewProduct productId={productId} setSelectedItem={setSelectedItem} ></ViewProduct>
    </div>;
  };*/
  const ListSquareItem =(props) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const texto = props.description.substring(1, 55) + " ..."
    return <div className="listSquare--item">
        <div className="listSquare--item--name">{props.name}</div>
        <div>{texto}</div>
        <ViewProduct productId={props.id}></ViewProduct>
    </div>;
  };

export default ListSquareItem;



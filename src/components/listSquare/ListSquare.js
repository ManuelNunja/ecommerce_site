import { useState } from "react";
import "./ListSquare.scss";
import ListSquareItem from "./ListSquareItem";
const items = [
    {productId: "1", productName: "Producto 1", productPrice: "150.00", productBrand: "Marca 1"},
    {productId: "2", productName: "Producto 2", productPrice: "300.00", productBrand: "Marca 2"},
    {productId: "3", productName: "Producto 3", productPrice: "450.00", productBrand: "Marca 3"},
    {productId: "4", productName: "Producto 4", productPrice: "600.00", productBrand: "Marca 4"},
    {productId: "5", productName: "Producto 5", productPrice: "1250.00", productBrand: "Marca 5"},
];

const ListSquare = () => {
  //const [selectedItem, setSelectedItem] = useState(null)
  return <div className="listSquare--container">
      <div className="listSquare--background">
      <div>
        {
        //<p>Item selected: {selectedItem ? selectedItem : "No item"}</p>
        ListSquareItem.prueba
      }
      </div>
        {
            items.map(({productId, productName, productPrice, productBrand}) => (
              <ListSquareItem productId={productId} key={productId} productName={productName} productPrice={productPrice} productBrand={productBrand}></ListSquareItem>              
              //<ListSquareItem productId={productId} key={productId} productName={productName} productPrice={productPrice} productBrand={productBrand} setSelectedItem={setSelectedItem}></ListSquareItem>
            ))
        }
      </div>
  </div>;
};

export default ListSquare;

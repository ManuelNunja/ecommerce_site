import { useState } from "react";
import { products } from "../../data/products";
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
  return <div className="listSquare--container">
  <div className="listSquare--background">
  <div>
    {
    ListSquareItem.prueba
  }
  </div>
    {
        /*products.map(({id, name, description, price, brand, stock}) => (
          <ListSquareItem productId={id} key={id} productName={name} productDescription={description} productPrice={price} productBrand={brand} productStock={stock}></ListSquareItem>
        ))*/
        products.map(({...product}) => (
          <ListSquareItem key={product.id} {...product}></ListSquareItem>
        ))
    }
  </div>
</div>
};

export default ListSquare;

import Item from "./Item";
import "./ItemListContainer.css";
const items = [
    {productId: "1", productName: "Producto 1", productPrice: "100.00", productBrand: "Marca 1"},
    {productId: "2", productName: "Producto 2", productPrice: "200.00", productBrand: "Marca 2"},
    {productId: "3", productName: "Producto 3", productPrice: "300.00", productBrand: "Marca 3"},
    {productId: "4", productName: "Producto 4", productPrice: "400.00", productBrand: "Marca 4"},
];

const ItemListContainer = () => {
  return <div className="containerProducts">
      {
          items.map(({productId, productName, productPrice, productBrand}) => (
              <Item key={productId} productName={productName} productPrice={productPrice} productBrand={productBrand}></Item>
          ))
      }
  </div>;
};

export default ItemListContainer;

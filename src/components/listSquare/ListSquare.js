import "./ListSquare.scss";
import ListSquareItem from "./ListSquareItem";
const items = [
    {productId: "1", productName: "Producto 1", productPrice: "150.00", productBrand: "Marca 1"},
    {productId: "2", productName: "Producto 2", productPrice: "300.00", productBrand: "Marca 2"},
    {productId: "3", productName: "Producto 3", productPrice: "450.00", productBrand: "Marca 3"},
    {productId: "4", productName: "Producto 4", productPrice: "600.00", productBrand: "Marca 4"},
];

const ListSquare = () => {
  return <div className="listSquare--container">
      <div className="listSquare--background">
        {
            items.map(({productId, productName, productPrice, productBrand}) => (
                <ListSquareItem key={productId} productName={productName} productPrice={productPrice} productBrand={productBrand}></ListSquareItem>
            ))
        }
      </div>
  </div>;
};

export default ListSquare;

import "./ItemListContainer.css";

const Item = ({productName, productPrice, productBrand}) => {
  return <div className="itemList">
      <div>{productName}</div>
      <div><span>Precio: </span>{productPrice}</div>
      <div><span>Marca: </span>{productBrand}</div>
  </div>;
};

export default Item;

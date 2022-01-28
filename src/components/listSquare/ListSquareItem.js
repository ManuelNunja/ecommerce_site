import "./ListSquare.scss";

const ListSquareItem =({productName, productPrice, productBrand}) => {
    return <div className="listSquare--item">
        <div className="listSquare--item--name">{productName}</div>
    </div>;
  };

export default ListSquareItem;

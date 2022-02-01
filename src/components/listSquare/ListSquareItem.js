import AddCartButton from "../addCart/AddCartButton";
import ItemCounter from "../counter/ItemCounter";
import "./ListSquare.scss";


const ListSquareItem =({productName, productPrice, productBrand}) => {
    return <div className="listSquare--item">
        <div className="listSquare--item--name">{productName}</div>
        <ItemCounter stock={10}></ItemCounter>
        <AddCartButton></AddCartButton>
    </div>;
  };

export default ListSquareItem;

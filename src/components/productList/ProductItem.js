import ItemCounter from "../counter/ItemCounter";

const ProductItem = ({id, name, description, stock}) => {
    return <div className="productList--item">
        <div className="name">{name}</div>
        <div className="subName">Producto</div>
        <br></br>
        <div className="description">Descripcion: {description}</div>
        <ItemCounter stock={stock}></ItemCounter>
    </div>;
};

export default ProductItem;

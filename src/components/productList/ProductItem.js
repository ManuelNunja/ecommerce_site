import ItemCounter from "../counter/ItemCounter";

const ProductItem = ({id, name, description, stock}) => {
    return <div>
        <div>Producto: {name}</div>
        <div>Descripcion: {description}</div>
        <ItemCounter stock={stock}></ItemCounter>
    </div>;
};

export default ProductItem;

import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() =>{
        getProducts()
    })

    const getProducts = async () => {
        try{
            const result = await productsAPI;
            setProducts(result);
        }
        catch(error){
            console.log(error);
        }
        finally{
            console.log("Finalizacion");
        }
    }
    return <div>
        {
            products.map((product) =>(
                <ProductItem key={product.id} {...product}></ProductItem>
            ))
        }
    </div>;
};

export default ProductList;

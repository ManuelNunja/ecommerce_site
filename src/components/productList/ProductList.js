import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import ProductItem from "./ProductItem";
import "./ProductItem.scss"

const ProductList = () => {
    const [stateProducts, setProducts] = useState([])
    
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
    return <div className="productList">
        <div className="productList--background">
            {
                stateProducts.map((product) =>(
                    <ProductItem key={product.id} {...product}></ProductItem>
                ))
            }
        </div>
    </div>;
};

export default ProductList;

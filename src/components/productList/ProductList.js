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
    return <div>
        <div className='div--separator'></div>
        <h2 className='h2--title'>Premium Products</h2>
        <h3 className='h3--title'>My E-commerce</h3>
        <div className="productList">
            <div className="productList--background">
                {
                    stateProducts.map((product) =>(
                        <ProductItem key={product.id} {...product}></ProductItem>
                    ))
                }
            </div>
        </div>
    </div>
};

export default ProductList;

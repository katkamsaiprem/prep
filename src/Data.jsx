import { useState } from "react";
import ProductCard from "./components/ProductCard";



const Data = async () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    try {
        const response = await fetch();
        const data = await response.json();
        console.log(data);
        setData(data);

    }
    catch (error) {
        console.error(error);


    }
    finally {
        setLoading(false);
    }

    const AddToCartHandler = () => {

        console.log(`Added ${productName} to cart`);

    }
    return (
        <>
            <ProductCard productName={productName} price={price} addToCartHandler={AddToCartHandler} />
        </>
    )

}
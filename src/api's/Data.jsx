import { useEffect, useState } from "react";

import { CardImage } from "../components/Card";



const Data = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const ProductData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setData(data);

        }
        catch (error) {
            console.error(error);
            setError(error)


        }
        finally {
            setLoading(false);
        }
    }

    const AddToCartHandler = (productName) => {

        console.log(`${productName}Added to cart `);

    }

    useEffect(() => {
        ProductData();
    }, [])



    return (
        <>
            {isLoading && <p>Loading</p>}
            {error && <p>{error?.message}</p>}

            <div className="flex flex-wrap gap-6 justify-center px-6 py-8">
                {
                    data?.map((element) =>

                        <CardImage key={element?.id} productInfo={element} addToCartHandler={AddToCartHandler} />

                    )
                }
            </div>

        </>
    )

}

export default Data;


import { useEffect, useState } from "react";





const ApiData = () => {

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



    useEffect(() => {
        ProductData();

        return () => {
            console.log("component is unmounted- cleanup");

        }
    }, [])



    return (
        <>
            {isLoading && <p>Loading</p>}
            {error && <p>{error?.message}</p>}


            <div>
                <ul>
                    {data && data.map((element) => (
                        <li key={element?.id}>{element.title}</li>
                    ))}
                </ul>
            </div>

        </>
    )

}

export default ApiData;
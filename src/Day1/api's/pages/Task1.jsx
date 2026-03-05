import { useState, useEffect } from "react";
import { CartProvider } from "@/Day1/api's/context/CartContext";
import { Navbar } from "@/Day1/api's/components/Navbar";
import { CardImage } from "@/Day1/api's/components/Card";
import { CartPage } from "@/Day1/api's/components/CartPage";


function ProductList() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products");
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", padding: "40px", color: "red" }}>{error.message}</p>;

    return (
        <div className="flex flex-wrap gap-6 justify-center px-6 py-8">
            {data?.map((element) => (
                <CardImage key={element.id} productInfo={element} />
            ))}
        </div>
    );
}

/
export default function Task1() {
    const [view, setView] = useState("shop"); 

    return (
        <CartProvider>
            <div style={{ minHeight: "100vh", background: "#f9fafb" }}>
                <Navbar view={view} onViewChange={setView} />

                {view === "shop" ? <ProductList /> : <CartPage />}
            </div>
        </CartProvider>
    );
}

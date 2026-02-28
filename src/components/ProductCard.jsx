const ProductCard = ({ productName, price, AddToCartHandler }) => {




    
    return (
        <>
            <h1>{productName}</h1>
            <p>{price}</p>
            <button onClick={AddToCartHandler}>AddToCart</button>


        </>
    )
}

export default ProductCard;
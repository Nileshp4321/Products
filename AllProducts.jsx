import React, { useEffect, useState } from "react";
// import Hover from "./Hover";

const card = {
    width: "20rem"
}
// const img = {
//     transform:"1"
// }
const Products = () => {

    const [allProducts, setAllProducts] = useState([]);
    
    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const actualData = await response.json();
        console.log(actualData);
        setAllProducts(actualData.products);
    }

    useEffect(() => {
        // getData();
    })
    return (
        <>
            <div className="container-fluid row mx-auto bg-dark">
                <h1 className="h1 text-center text-light">Products</h1>
                <hr></hr>
                { 
                    allProducts.map((current,index)=>{
                        return(
                            <div className="card col-sm-6 ms-5 mt-3 border border-primary" style={card} key={index}>
                                <img  src={current.thumbnail}   className="card-img-top img-thumbnail rounded figure-img" alt="product" />
                                <div className="card-body bg-dark ">
                                     <h2 className="card-title text-center text-secondary">{current.title}</h2>
                                    <h5 className="h5 text-center text-light">{current.brand}</h5>
                                    <p className="card-text text-light ">Description :- {current.description}</p>
                                    <p className="card-text text-primary">Discount Percentage :- {current.discountPercentage}</p>
                                    <p className="card-text text-primary">Price :- {current.price}</p>
                                    <p className="card-text text-success">Rating :- {current.rating}</p>
                                    <p className="card-text text-danger">Remaining stock :- {current.stock}</p>
                                    <a href="www.google.com" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>  
                        );
                    })                }
            </div>
        </>
    );
}

export default Products;


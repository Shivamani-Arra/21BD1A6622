import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products/${productId}`);
                setProduct(response.data); // Set the fetched product data in state
            } catch (error) {
                setError(error); // Set error state if request fails
            }
        };

        fetchProduct(); // Call the fetchProduct function when the component mounts
    }, [productId]); // Dependency array includes productId, so the effect runs whenever productId changes

    if (error) {
        return <div>Error: {error.message}</div>; // Render error message if request fails
    }

    if (!product) {
        return <div>Loading...</div>; // Render loading message while fetching product data
    }

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {product.name}</p>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'Available' : 'Out of stock'}</p>
        </div>
    );
};

export default ProductDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products');
                setProducts(response.data); // Set the fetched data in state
            } catch (error) {
                setError(error); // Set error state if request fails
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once

    if (error) {
        return <div>Error: {error.message}</div>; // Render error message if request fails
    }

    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='col-8 row row-cols-1 row-cols-md-3 g-4'>
            {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={props.handleAddToCart}></Product>)
            }
        </div>
    );
};

export default Shop;
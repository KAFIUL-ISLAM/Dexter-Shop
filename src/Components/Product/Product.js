import React from 'react';

const Product = (props) => {
    const { name, thumbnail, price } = props.product;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={thumbnail} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button className='btn btn-outline-warning'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
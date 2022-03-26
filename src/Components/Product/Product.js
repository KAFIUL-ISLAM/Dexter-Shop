import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {

    const { name, thumbnail, price } = props.product;
    const { handleAddToCart } = props;
    
    return (
        <div>
            <div className="col">
                <div className="card bg-light">
                    <img src={thumbnail} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button className='btn btn-outline-warning' onClick={()=> handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
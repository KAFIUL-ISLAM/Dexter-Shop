import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const { cart, handleClearCart, randomlyPick,removeFromCart } = props;
        
    return (
        <div className='col-4 mt-5'>
            <div className="card bg-light">
                    <div className="card-body">
                    <h5 className="card-title">Selected Items:</h5>
                    {
                        cart.map(cartProduct => <div key={cartProduct.id}>
                            <img src={cartProduct.thumbnail} alt="" className='w-25 border rounded-pill m-2'/>
                            <h6 className="card-title d-inline">{cartProduct.name}</h6>
                            <button className='btn mx-2' onClick={() => removeFromCart(cartProduct)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                        </div>
                        )
                    }
                    <button className="btn btn-outline-success me-2" onClick={randomlyPick}>Pick The Best One</button>
                    <button className="btn btn-outline-primary" onClick={handleClearCart}>Clear Cart</button>
                    </div>
            </div>
        </div>
    );
};

export default Cart;
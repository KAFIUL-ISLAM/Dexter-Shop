import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    return (
        <div className='col-4 mt-5'>
            <div className="card bg-light">
                    <div className="card-body">
                    <h5 className="card-title">Selected Items:</h5>
                    {
                        cart.map(cartProduct => <p key={cartProduct.id} className="card-text">{cartProduct.name}</p>)
                    }
                        <button className="btn btn-outline-primary">Go somewhere</button>
                    </div>
            </div>
        </div>
    );
};

export default Cart;
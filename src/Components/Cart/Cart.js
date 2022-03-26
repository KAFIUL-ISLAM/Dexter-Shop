import React from 'react';

const Cart = (props) => {
    const { thumbnail, name } = props.cart;
    return (
        <div className='col-4 mt-5'>
            <div className="card bg-light">
                    <div className="card-body">
                    <h5 className="card-title">Selected Items: {props.cart.length}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-outline-primary">Go somewhere</button>
                    </div>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length >=2 ? 'violet' : 'sky' }`}>Get your tshirt now</p>

            { cart.length> 2 ? <span className='orange'>Voucher applicable</span> : <span>Voucher not applicable</span> }
            
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>
                )
            }
            { cart.length === 5 ? <span className='yellow'>Special 40% offer
            </span> : '' }
        </div>
    );
};

export default Cart;
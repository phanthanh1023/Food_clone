import React, { useContext, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { StoreContext } from '../../context/StoreContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItem, foodList, removeFromCart, getTotalAmount } = useContext(StoreContext)
    return (
        <>
            <Navbar></Navbar>
            <div className='container pt-10 pb-10'>
                <h1 className='justify-center text-2xl font-semibold text-center'>Shopping Cart</h1>
                <table className="table w-full mt-5 table-bordered table-hover">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className='px-4 py-3 text-center'>STT</th>
                            <th className="px-4 py-3 text-center">Items</th>
                            <th className="px-4 py-3 text-center">Title</th>
                            <th className="px-4 py-3 text-center">Price</th>
                            <th className="px-4 py-3 text-center">Quantity</th>
                            <th className="px-4 py-3 text-center">Total</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodList.map((item, index) => {
                            if (cartItem[item.id] > 0) {
                                return (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        index={index + 1}
                                        removeFromCart={removeFromCart}
                                        cartItem={cartItem}
                                    >
                                    </CartItem>
                                )
                            }
                        })}
                    </tbody>
                </table>
                <div className='w-1/2 pt-10 pb-10'>
                    <h2 className="mb-4 text-2xl font-bold">Cart Totals</h2>
                    <div className="flex justify-between pb-2 mb-3 border-b">
                        <span>Subtotal</span>
                        <span>${getTotalAmount()}</span>
                    </div>
                    <div className="flex justify-between pb-2 mb-2 border-b ">
                        <span>Delivery Fee</span>
                        <span>${getTotalAmount() === 0 ? 0 : 5}</span>
                    </div>
                    <div className="flex justify-between mb-4 font-bold">
                        <span>Total</span>
                        <span>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 5}</span>
                    </div>
                    <Link to="/order" className="flex justify-center w-1/2 py-2 text-white rounded bg-secondary">
                        PROCEED TO CHECKOUT
                    </Link>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Cart;
import React, { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const { getTotalAmount } = useContext(StoreContext)
    return (
        <>
            <Navbar></Navbar>
            <div className='container flex justify-between pt-10 pb-10 space-x-10'>
                {/* left */}
                <div className='w-1/2'>
                    <h1 className="mb-6 text-2xl font-bold">Delivery Information</h1>
                    <form className="space-y-5">
                        <div className="flex space-x-4">
                            <input type="text" placeholder="First name" className="w-1/2 p-2 border border-gray-400 rounded" />
                            <input type="text" placeholder="Last name" className="w-1/2 p-2 border border-gray-400 rounded" />
                        </div>
                        <input type="email" placeholder="Email address" className="w-full p-2 border border-gray-400 rounded" />
                        <input type="text" placeholder="Street" className="w-full p-2 border border-gray-400 rounded" />
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Thành Phố" className="w-1/3 p-2 border border-gray-400 rounded" />
                            <input type="text" placeholder="Quận" className="w-1/3 p-2 border border-gray-400 rounded" />
                            <input type="text" placeholder="Huyện" className="w-1/3 p-2 border border-gray-400 rounded" />
                        </div>
                        <input type="number" placeholder="Phone" className="w-full p-2 border border-gray-400 rounded" />
                    </form>
                </div>

                {/* right */}
                <div className='w-1/3'>
                    <h2 className="mb-4 text-2xl font-bold">Cart Totals</h2>
                    <div className="flex justify-between pb-2 mb-3 border-b">
                        <span>Subtotal</span>
                        <span>${getTotalAmount()}</span>
                    </div>
                    <div className="flex justify-between pb-2 mb-2 border-b">
                        <span>Delivery Fee</span>
                        <span>${getTotalAmount() === 0 ? 0 : 5}</span>
                    </div>
                    <div className="flex justify-between mb-4 font-bold">
                        <span>Total</span>
                        <span>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 5}</span>
                    </div>
                    <Link to="/payment" className="flex justify-center w-full py-2 text-white rounded bg-secondary">
                        PROCEED TO PAYMENT
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;

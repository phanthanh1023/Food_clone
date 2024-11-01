import React, { useContext } from 'react';
import { FaRegStar } from "react-icons/fa";
import { disableInstantTransitions, motion } from 'framer-motion'
import { FadeLeft } from '../../../utility/animation/Animation';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { StoreContext } from '../../../context/StoreContext';

const FoodItem = ({ id, title, price, images, description, rating }) => {
    const maxLength = 70;
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='flex flex-col'>
            <motion.div
                variants={FadeLeft(0.9)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 0.9 }}
                className='flex flex-col flex-1 cursor-pointer justify-center gap-5 items-center px-4 py-4  bg-white rounded-xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                <img
                    className='w-[100px] '
                    src={images[0]} alt={title} />
                {!cartItem[id] ? (
                    <AiOutlinePlus
                        className='w-6 h-6 p-1 bg-white border border-gray-400 rounded-full ml-[150px]'
                        onClick={() => addToCart(id)}
                    />
                ) : (
                    <div className='flex items-center gap-3 px-4 py-2 bg-white rounded-full ml-[100px] shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                        <AiOutlineMinus
                            className='w-6 h-6 p-1 bg-red-200 rounded-full text-primary'
                            onClick={() => {
                                if (cartItem[id] > 0) removeFromCart(id);
                            }}
                        />
                        <p>{cartItem[id]}</p>
                        <AiOutlinePlus
                            className='w-6 h-6 p-1 text-green-500 bg-green-200 rounded-full'
                            onClick={() => addToCart(id)}
                        />
                    </div>
                )}

                <div className=''>
                    <div className='flex items-center justify-between mt-2'>
                        <h1 className='text-lg font-semibold w-[200px]'>{title}</h1>
                    </div>
                    <p className='mt-3 text-gray-600 '>
                        {description.length > maxLength ?
                            `${description.slice(0, maxLength)}...` :
                            description}
                    </p>
                    <div className='flex items-center justify-between mt-3'>
                        <p className='text-lg font-semibold text-secondary'>{price}$</p>
                        <p className='flex items-center gap-2 text-lg font-normal'>
                            {rating}
                            <FaRegStar className='text-orange-500' />
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FoodItem;
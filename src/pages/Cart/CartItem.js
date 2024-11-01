import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const CartItem = ({ item, index, removeFromCart, cartItem }) => {
    return (
        <>
            <tr className='items-center justify-center text-center'>
                <td className='border-b'>{index}</td>
                <td className="flex justify-center px-4 py-2 border-b ">
                    <img src={item.images[0]} alt="{item.title}" className="object-cover w-12 h-12 " />
                </td>
                <td className="px-4 py-2 border-b">{item.title}</td>
                <td className="px-4 py-2 border-b">$ {item.price}</td>
                <td className="px-4 py-2 border-b ">
                    <div className="flex items-center p-2 border rounded-xl w-[80px] mx-auto cursor-pointer">
                        <AiOutlineMinus className='w-5 h-5 ' />
                        <input
                            value={cartItem[item.id]}
                            className="w-10 mx-auto text-center h-10x focus:outline-none ">
                        </input>
                        <AiOutlinePlus className='w-5 h-5 ' />
                    </div>

                </td>
                <td className="px-4 py-2 border-b">$ {item.price * cartItem[item.id]} </td>
                <td className="px-4 py-2 font-medium border-b cursor-pointer">
                    <div onClick={() => removeFromCart(item.id)}
                        className='flex items-center justify-center gap-2'>
                        <MdDeleteForever className='inline w-6 h-6 text-center text-primary' />
                        <p>Xóa</p>
                    </div>
                </td>
            </tr>

        </>
    );
};

export default CartItem;

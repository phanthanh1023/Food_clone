import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation/Animation';
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    const getMenu = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            setMenu(res.data.products);
        } catch (error) {
            toast.warning("Khong tai duoc du lieu");
        }
    }
    useEffect(() => {
        getMenu();
    }, []);
    return (
        <div className='container pt-12 pb-20'>
            <div className='pb-10'>
                <motion.h1
                    initial={{ opacity: 0, x: -200, }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='pb-2 text-2xl font-bold uppercase'>Our Menu</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -200, }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className='text-gray-400 max-w-[650px] text-base'>
                    Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                    cravings and elevate your dining experience, one delicious meal at a time.
                </motion.p>
            </div>
            <div className='products-list'>
                <Swiper
                    grabCursor={"true"} spaceBetween={40} slidesPerView={4}
                >
                    {menu.map((item, index) => (
                        <SwiperSlide key={item.id} >
                            <motion.div
                                variants={FadeLeft(index)}
                                initial="hidden"
                                whileInView={"visible"}
                                whileHover={{ scale: 0.9 }}
                                className='flex flex-row cursor-pointer justify-center gap-3 items-center px-4 py-4 bg-white rounded-lg shadow-[0_0_22px_0_rgba(0,0,0,0.15)] border hover:border-primary '

                            >
                                <img
                                    className='w-[100px] scale-125 transform -translate-y-1'
                                    src={item.thumbnail} alt="thumbnail" />
                                <div>
                                    <h1 className='text-lg font-semibold w-[160px]'>{item.title}</h1>
                                    <h1 className='text-lg font-semibold text-secondary'>{item.price}$</h1>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Menu;
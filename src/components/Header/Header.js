import React from 'react';
import { IoBagAddOutline } from "react-icons/io5";
import Heropng from '../../assets/Fruits/fruit-plate.png';
import Leaf from '../../assets/Fruits/leaf.png';
import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation/Animation';



const Header = () => {
    return (
        <section className='container grid relative grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            <div className='flex flex-col justify-center py-12 z-5 md:py-0'>
                <div className='text-center lg:max-w-[400px] md:text-left '>
                    <motion.h1
                        variants={FadeRight(0.6)}
                        initial="hidden"
                        animate="visible"
                        className='text-5xl font-bold lg:text-6xl xl:leading-normal'>
                        Heathy
                        <br />
                        Fresh <span className='text-secondary'>Fruits!</span>
                    </motion.h1>
                </div>
                <div className='mt-3'>
                    <motion.p
                        variants={FadeRight(0.9)}
                        initial="hidden"
                        animate="visible"
                        className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
                    <motion.p
                        variants={FadeRight(1.2)}
                        initial="hidden"
                        animate="visible"
                        className='mt-3 text-gray-400 max-w-[400px]'>Healthy and yummy food for fresh morning breakfast.
                        Eat Daily for good health and mind. Order now and get 20% off on your first order</motion.p>
                    <motion.div
                        variants={FadeRight(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='flex mt-3'>
                        <button className='flex items-center gap-2 primary-btn'>
                            <IoBagAddOutline />
                            Order Now</button>
                    </motion.div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <motion.img
                    initial={{ opacity: 0, x: 200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src={Heropng} alt="" className='w-[350px] drop-shadow' />
            </div>
            <div className='absolute right-1/2 top-16 md:top-14 blur-sm opacity-80 rotate-[50deg]'>
                <motion.img
                 initial={{ opacity: 0, x: -200, rotate: 75 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                 src={Leaf} alt="" className='w-[300px] md:max-w[300px]' />
            </div>
        </section>
    );
};

export default Header;

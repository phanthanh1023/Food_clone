import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
const ResonsiveMenu = ({ open }) => {
    return (
        <AnimatePresence mode="wait" >
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className='absolute left-0 z-20 w-full h-screen top-20'>

                    <div className='py-10 m-6 text-xl font-semibold text-white uppercase bg-primary rounded-3xl'>
                        <ul className='flex flex-col items-center gap-10 cursor-pointer'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Product</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResonsiveMenu;
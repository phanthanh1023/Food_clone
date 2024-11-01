import React, { useContext } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import FoodItem from '../../Oder/FoodItem/FoodItem'
import { motion } from 'framer-motion'
const FooDisplay = ({category}) => {
    const { foodList } = useContext(StoreContext);
    return (
        <div className='container pt-12 pb-20'>
            <motion.h2
                initial={{ opacity: 0, x: -200, }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='pb-2 text-2xl font-bold uppercase'>Top dishes near you</motion.h2>
            <div className='grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 md:grid-cols-4'>
                {foodList.map((item) => (
                    <FoodItem
                        key={item.id}
                        id={item.id} title={item.title} description={item.description}
                        price={item.price} images={item.images} rating={item.rating}></FoodItem>
                ))}
            </div>
        </div>
    );
};

export default FooDisplay;

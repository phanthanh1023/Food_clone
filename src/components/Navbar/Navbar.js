import React, { useContext, useEffect, useState } from 'react';
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import ResonsiveMenu from './ResonsiveMenu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import useScrollNavbar from '../../hook/useScrollNavbar';


const navbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Contact", link: "/contact" },
    { id: 4, title: "Product", link: "/product" },
    { id: 5, title: "Shop", link: "/shop" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { getCartItemCount } = useContext(StoreContext);
    const { scrollPosition } = useScrollNavbar();
    const [fixedPosition, setFixedPosition] = useState(false);

    useEffect(() => {
        if (scrollPosition > 80) {
            setFixedPosition(true)
        } else {
            setFixedPosition(false)
        }
    }, [scrollPosition]);

    return (
        <>
            <nav>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`container flex items-center justify-between py-4 md:pt-4 ${fixedPosition ? 'fixedNavbar' : ''
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold uppercase">
                        <p className="text-primary">Fruit</p>
                        <p className="text-secondary">Store</p>
                        <FaLeaf className="text-green-500" />
                    </Link>

                    {/* Menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-600">
                            {navbarMenu.map((menu) => (
                                <li key={menu.id} className="text-xl">
                                    <a href={menu.link} className="inline-block px-3 py-1 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px]">
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                            <Link to="/cart" className="relative p-2 transition duration-300 ease-in-out rounded-full cursor-pointer hover:bg-primary hover:text-white">
                                <MdOutlineShoppingCart className="w-8 h-8" />
                                {getCartItemCount() > 0 && (
                                    <span className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
                                        {getCartItemCount()}
                                    </span>
                                )}
                            </Link>
                            <div className="flex gap-5 cursor-pointer">
                                <Link to="/login" className="px-3 py-2 text-xl text-white border border-gray-200 rounded-xl bg-secondary hover:bg-transparent hover:text-blue-500">
                                    Login
                                </Link>
                            </div>
                        </ul>
                    </div>

                    {/* Mobile menu icon */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <IoMenuOutline className="text-4xl" />
                    </div>
                </motion.div>
            </nav >

            {/* Mobile menu section */}
            < ResonsiveMenu open={open} />
        </>
    );
};

export default Navbar;

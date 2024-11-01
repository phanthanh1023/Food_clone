import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbScanPosition } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="py-10 text-white bg-gray-900">
            <div className="container flex gap-8 mx-auto">
                {/* left */}
                <div className='w-2/5'>
                    <div className="flex items-center gap-2 mb-4 uppercase">
                        <h1 className="text-3xl font-bold text-primary">fruit</h1>
                        <h1 className="text-3xl font-bold text-secondary">Store</h1>
                        <FaLeaf className='text-3xl text-green-500' />
                    </div>
                    <p className="mb-4 max-w-[350px] text-base leading-6">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                        <TbScanPosition className='w-8 h-8' />
                        <span>Noida, Uttar Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <FaPhone className='w-6 h-6' />
                        <span>+91 123456789</span>
                    </div>
                    <div className="flex space-x-4 cursor-pointer">
                        <FaInstagram className='w-8 h-8' />
                        <FaFacebook className='w-8 h-8' />
                        <FaLinkedin className='w-8 h-8' />
                    </div>
                </div>
                
                {/* right */}
                <div className='w-2/5'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className="mb-4 text-xl font-bold">Important Links</h2>
                            <ul>
                                <li className="mb-2 hover:underline"><a href="#">Home</a></li>
                                <li className="mb-2 hover:underline"><a href="#">About</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Services</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Login</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-xl font-bold">Links</h2>
                            <ul>
                                <li className="mb-2 hover:underline"><a href="#">Home</a></li>
                                <li className="mb-2 hover:underline"><a href="#">About</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Services</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Login</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-xl font-bold">Links</h2>
                            <ul>
                                <li className="mb-2 hover:underline"><a href="#">Home</a></li>
                                <li className="mb-2 hover:underline"><a href="#">About</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Services</a></li>
                                <li className="mb-2 hover:underline"><a href="#">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-2/3 mx-auto mt-6 border-t border-white" />
            <p className='block mx-auto mt-2 text-center'>@CopyRight 2024</p>
            </footer>
    );
};

export default Footer;

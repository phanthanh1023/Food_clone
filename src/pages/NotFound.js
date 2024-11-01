import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container flex flex-col items-center pt-20'>
            <img
                className='object-cover w-1/2 mx-auto '
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECTR1Yc6fNDgn3XyRT1J6FaoPBBkMe4Fzug&s" alt="" />
            <Link to="/" className="px-4 py-2 mt-5 text-xl text-white cursor-pointer rounded-xl bg-primary">
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;

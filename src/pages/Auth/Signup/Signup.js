import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Heropng from '../../../assets/Fruits/fruit-plate.png';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const createUser = async () => {
        if (!name.trim() || !password.trim()) { // Trim whitespace
            toast.warning("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        try {
            const res = await axios.post("http://localhost:3000/users", {
                name: name.trim(),
                password: Number(password) 
            });
            if (res.status === 201) {
                toast.success("Đăng ký thành công");
                navigate("/");
            } else {
                toast.error("Có lỗi xảy ra, không thể đăng ký.");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            toast.error("Đăng ký thất bại");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-white">
            <img src={Heropng} alt="" className='absolute inset-0 object-cover opacity-80 blur-md' />
            <div className='relative z-10 w-[500px] p-8 border border-gray-100 shadow-2xl rounded-lg bg-white'>
                <h2 className="mb-4 text-2xl font-bold text-center text-primary">Sign in Form</h2>
                <form onSubmit={handleSubmit} className='text-lg font-normal'>
                    <div>
                        <label className='flex flex-col mb-3'>Username:</label>
                        <input
                            type="text"
                            placeholder="Username..."
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='flex flex-col mb-3'>Password:</label>
                        <input
                            type="password"
                            placeholder="Password..."
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-3 py-2 text-lg font-medium text-white rounded-lg cursor-pointer bg-secondary">
                            Signup
                        </button>
                    </div>
                </form>
                <Link to="/login">
                    <div className='block mt-3 text-right text-red-600 underline cursor-pointer'>
                        login
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Signup;

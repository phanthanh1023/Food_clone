import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Heropng from '../../../assets/Fruits/fruit-plate.png';
import { toast } from 'react-toastify'

const Login = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/users");
            setUsers(res.data);
        } catch (error) {
            toast.error("Không thể đọc dữ liệu");
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name, "Password:", password);

        // Kiểm tra nếu không có thông tin
        if (!name || !password) {
            toast.warning("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        // Kiểm tra người dùng
        const foundUser = users.find((u) => u.name === name && u.password ===Number(password));
        console.log("password", typeof (password))


        if (foundUser) {
            toast.success("Đăng nhập thành công");
            navigate("/");  
        } else {
            toast.error("Thông tin đăng nhập không đúng.");
        }
    };


    return (
        <div className='relative flex items-center justify-center min-h-screen bg-white'>
            <img src={Heropng} alt="" className='absolute inset-0 object-cover opacity-80 blur-md' />

            {/* Form login ở giữa ảnh */}
            <div className='relative z-10 w-[500px] p-8 border border-gray-100 shadow-2xl rounded-lg bg-white'>
                <div className='flex items-center justify-between'>
                    <h2 className='mx-auto text-2xl font-bold text-primary'>Login Form</h2>
                    <IoIosCloseCircleOutline
                        className='w-8 h-8 cursor-pointer'
                        onClick={() => navigate("/")}
                    />
                </div>
                <form className='mt-4 text-lg' onSubmit={handleSubmit}>
                    <div>
                        <label className='flex flex-col mb-2'>Username:</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Username..."
                            className="w-full p-2 mb-4 border rounded border-secondary"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='flex flex-col mb-2'>Password:</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Password..."
                            className="w-full p-2 mb-4 border rounded border-secondary"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type='submit' className="px-4 py-2 font-medium text-white rounded-lg bg-secondary">
                            LOGIN
                        </button>
                    </div>
                </form>
                <Link to='/sign_up' className="mt-3 text-center text-blue-500">
                    Sign Up now
                </Link>
            </div>
        </div>
    );
}


export default Login;

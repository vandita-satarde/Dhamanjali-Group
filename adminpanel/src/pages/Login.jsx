import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Hardcoded credentials
    const correctUsername = "admin@gmail.com";
    const correctPassword = "admin@123";

    const handleLogin = () => {
        if (username === correctUsername && password === correctPassword) {
            setError("");
            navigate("/dashboard"); // redirect to dashboard
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-[#0E1836] text-white">
                <form
                    className="max-w-sm w-full"
                    onSubmit={(e) => e.preventDefault()}  // prevent page reload
                >
                    <h2 className="text-2xl mb-6 text-center">Admin Panel Login</h2>

                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded bg-[#F5F9FE] text-black border border-gray-600 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 mb-4 rounded bg-[#F5F9FE] text-black border border-gray-600 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-red-400 text-center mb-3">{error}</p>
                    )}

                    <div className='text-center'>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className=" max-w-3xs w-full bg-blue-900 border-2 border-gray-800 hover:border-2 hover:border-gray-600 p-2 rounded text-white "
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;

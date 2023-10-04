import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Spinner from '../../components/Spinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });

            const { success, message } = response.data;

            if (success) {
                toast.success(message);
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token,
                });
                
                // Redirect to the dashboard based on the user's role
                navigate(`/dashboard/${response.data.user.role === 1 ? 'admin' : 'user'}`);
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };
    //backend ends

    return (
        <Layout title={"Login-Ecommerce"}>
            <div className="register">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
                        Forgot Password
                    </button>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;

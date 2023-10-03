import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email,
                newpassword,
                answer,
            });

            const { success, message } = res.data;

            if (success) {
                toast.success(message);
                
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/login'); // Navigate to the login page 
            } else {
                toast.error(message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong');
        }
    };
  return (
    <Layout title={'forgot-password-Ecommerce'}>
       <div className="register">
                <h1>Reset Password</h1>
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
                        <label htmlFor="email" className="form-label">Answer</label>
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="answer"
                            placeholder='Enter your secret Answer'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">New Password</label>
                        <input
                            type="text"
                            value={newpassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="newpassword"
                            placeholder='Enter your new password'
                            required
                        />
                    </div>
                    <div className="mb-3">
                    {/* <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
                        Forgot Password
                    </button> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Reset</button>
                </form>
            </div>
    </Layout>
  )
}

export default ForgotPassword

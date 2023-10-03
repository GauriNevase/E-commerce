import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()

    //form function
const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(name,email,password,address,phone);
    // toast.success("Register Successfully");
    try {
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});  //backend connection
        if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
    } catch (error) {
       console.log(error)
       toast.error('something went wrong') 
    }
};
console.log(process.env.REACT_APP_API);

    return (
        <Layout title={"Register-Ecommerce"}>
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="name"
                            placeholder='Enter your name'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Email</label>
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
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
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
                        <label htmlFor="exampleInputName" className="form-label">Phone No</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="phone"
                            placeholder='Enter your phone no'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="address"
                            placeholder='Enter your address'
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register

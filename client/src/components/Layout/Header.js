import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiShoppingBag } from 'react-icons/hi'
import { useAuth } from '../../context/auth.js'
import toast from 'react-hot-toast'

const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        localStorage.removeItem("auth");
        toast.success("Logout Sucessfully")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><HiShoppingBag />Localhive</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link ">Category</NavLink>
                            </li>

                            {
                                !auth.user ? (<><li className="nav-item">
                                    <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
                                </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
                                    </li></>) : (<>
                                        <div className="dropdown">
                                            <NavLink className="nav-link dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/dashboard" className="dropdown-item" >Dashboard</NavLink></li>
                                                <li className="dropdown-item">
                                                    <NavLink onClick={handleLogout} to="/login" className="nav-link" >Logout</NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                    </>)
                            }
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" href="#">Cart(0)</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header

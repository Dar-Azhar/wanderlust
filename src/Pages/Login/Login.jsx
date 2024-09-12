import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Login.scss'
// import loginImage from '../../assets/images/girl-1459248_640-removebg-preview.png'
import loginImage2 from '../../assets/images/girl-1459248_640.png'
import { Layout } from '../../components/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [loggedin, setLoggedin] = useState(false)
    const navigate = useNavigate()
    const [Error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

      useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setLoggedin(true);
            navigate('/dashboard'); // Redirect to dashboard if already logged in
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try {
            const res = await axios.post('/login/', data)
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('name', res.data.user.name)
            alert(res.data.message)
            // console.log(res.data);
            setData({ email: "", password: "" })
            setLoggedin(true)
            const intendedRoute = localStorage.getItem('intendedRoute') || '/dashboard';
            localStorage.removeItem('intendedRoute'); 
            navigate(intendedRoute);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                setError("*Invalid credentials");
            } else {
                setError("*An unexpected error occurred");
            }
        }
        // finally {
        //     setLoading(false);
        // }
    }
    return (
        <Layout>
            <main>
                <div className="login">
                    <div className="left">
                        <h1>Welcome Back!</h1>
                        <h6>Log in to your account</h6>
                        <p>Access exclusive travel deals and manage your bookings.</p>
                        <img src={loginImage2} alt="" />
                    </div>
                    <div className="right">
                        <h2>Login</h2>
                        <form className="login-form" method='POST' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" onChange={handleChange} value={data.email} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" onChange={handleChange} value={data.password} required />
                                <i
                                    className={`fas fa-eye${showPassword ? '-slash' : ''}`}
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '45px' }}
                                />
                            </div>
                            {Error && <p className="error-message">{Error}</p>}
                            <button type="submit" className="submit-button">Login</button>
                            <p><a href="#" className='forgotPassword'>Forgot Password?</a></p>
                            <p className="register-link">
                                Don't have an account? <a href="/register">Register here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>

    )
}

import React, { useState } from 'react'
import './Register.scss'
import register from '../../assets/images/register.png'
import { Layout } from '../../components/Layout'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Register = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const[error, setError] = useState('')
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register/', data);
            setError("")
            console.log("registered");
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data) {
                let errorMessage = '';
                // Collect errors from non_field_errors and email
                if (error.response.data.non_field_errors) {
                    errorMessage += error.response.data.non_field_errors.join(', ') + ' ';
                }
                if (error.response.data.email) {
                    errorMessage += error.response.data.email.join(', ') + ' ';
                }
                if (error.response.data.username) {
                    errorMessage += error.response.data.username.join(', ') + ' ';
                }
                setError(errorMessage.trim()); // Set the collected error message
            } else {
                console.log(error); // Handle other errors
                console.log("else");
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    return (
        <Layout>
            <main>
                <div className="register">
                    <div className="left2">
                        <h1>Register</h1>
                        <form className="registration-form" method='POST' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" onChange={handleChange} value={data.username} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" onChange={handleChange} value={data.email} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type={showPassword? 'text' : 'password'} id="password" minLength={6} name="password" onChange={handleChange} value={data.password} required />
                                <i 
                                    className={`fas fa-eye${showPassword ? '-slash' : ''}`} 
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '35px' }}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type={showPassword? "text" : "password"} id="confirmPassword" name="confirmPassword" onChange={handleChange} value={data.confirmPassword} required />
                                <i 
                                    className={`fas fa-eye${showPassword ? '-slash' : ''}`} 
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '35px' }}
                                />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <button type="submit" className="submit-button">Register</button>

                            <p className="login-link">
                                Already have an account? <a href="/login">Login here</a>
                            </p>
                        </form>
                    </div>
                    <div className="right2">
                        <h1>Join Wanderlust Travels</h1>
                        <h6>Explore Amazing Travel Packages</h6>
                        <p>Create an account to unlock exclusive deals and offers tailored for you!</p>
                        <img src={register} alt="" />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

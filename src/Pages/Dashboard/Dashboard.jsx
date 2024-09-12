import React from 'react';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';


export const Dashboard = () => {
    const name = localStorage.getItem("name")
    const navigate = useNavigate()
    const Logout = async () => {
        try {
            const res = await axios.post('/logout/', null, {
                headers: {
                    'X-CSRFToken': getCSRFToken(),  // Include CSRF token if needed
                }
            });
            // Clear tokens and other session data
            localStorage.removeItem('authToken');
            localStorage.removeItem('name')

            // Redirect to login page
            navigate('/login/');
            console.log(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to get CSRF token from cookies
    const getCSRFToken = () => {
        let csrfToken = null;
        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach(cookie => {
                const [name, value] = cookie.trim().split('=');
                if (name === 'csrftoken') {
                    csrfToken = decodeURIComponent(value);
                }
            });
        }
        return csrfToken;

    };



    return (
        <Layout>
            <div>
                <h1>Welcome , {name}!</h1>
                <button type="button" onClick={Logout}>Logout</button>
            </div>
        </Layout>
    );
};

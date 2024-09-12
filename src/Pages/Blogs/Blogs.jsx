import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Blogs.scss';
import { Blog } from '../../components/Blog/Blog';
import { Layout } from '../../components/Layout';

export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('/blogs');
                setBlogs(res.data);
                console.log(res.data);
            } catch (error) {
                setError('Failed to fetch blogs. Please try again later.');
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <Layout>
            <main className='blogs-container'>
                {loading && <p>Loading blogs...</p>}
                {error && <p className="error">{error}</p>}
                {blogs.map(eachBlog => (
                    <Blog key={eachBlog?.blogId}
                        blogId={eachBlog.blogId}
                        bannerImage={`${axios.defaults.baseURL}${eachBlog.bannerImage}`} // Using Axios base URL
                        category={eachBlog.category}
                        title={eachBlog.title}
                        content={eachBlog.content}
                    />
                ))}
            </main>
        </Layout>
    );
}

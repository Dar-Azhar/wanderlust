// IndiBlogs.jsx
import React, { useEffect, useState } from 'react';
import './IndiBlogs.scss';
import { Layout } from '../../components/Layout';
import { useParams } from 'react-router-dom';
import blog1 from '../../assets/images/blog.png'
import axios from '../../axios';


export const IndiBlogs = () => {
    const [blog, setBlog] = useState([])
    const { id } = useParams(); // Get the ID from the URL
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`/blogs/${id}`)
                setBlog(res.data)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

        fetchBlog()
    }, [id])


    // Sample data (You would typically fetch this from an API or your state)
    // const blogPosts = [
    //     {
    //         id:'1',
    //         image:blog1 ,
    //         category:"Travel",
    //         title:"Exploring the Beauty of Kashmir",
    //         content:"Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, stunning mountains, and lush green valleys. In this blog, we explore the vibrant culture, delicious cuisine, and the warm hospitality of the Kashmiri people. From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, each corner of Kashmir offers a unique experience. Join us on a journey through picturesque locales such as Gulmarg, Pahalgam, and the stunning gardens of Srinagar, where every moment feels like a dream come true.",
    //         name:"Riyan Haider Kokir",
    //         date:"August 8, 2024",
    //     }, {
    //         id:'2',
    //         image:blog1 ,
    //         category:"Travel",
    //         title:"Exploring the Beauty of Kashmir",
    //         content:"Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, stunning mountains, and lush green valleys. In this blog, we explore the vibrant culture, delicious cuisine, and the warm hospitality of the Kashmiri people. From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, each corner of Kashmir offers a unique experience. Join us on a journey through picturesque locales such as Gulmarg, Pahalgam, and the stunning gardens of Srinagar, where every moment feels like a dream come true.",
    //         name:"Riyan Haider Kokir",
    //         date:"August 8, 2024",
    //     },
    //     {
    //         id:'3',
    //         image:blog1 ,
    //         category:"Travel",
    //         title:"Exploring the Beauty of Kashmir",
    //         content:"Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, stunning mountains, and lush green valleys. In this blog, we explore the vibrant culture, delicious cuisine, and the warm hospitality of the Kashmiri people. From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, each corner of Kashmir offers a unique experience. Join us on a journey through picturesque locales such as Gulmarg, Pahalgam, and the stunning gardens of Srinagar, where every moment feels like a dream come true.",
    //         name:"Riyan Haider Kokir",
    //         date:"August 8, 2024",
    //     },
    //     {
    //         id:'4',
    //         image:blog1 ,
    //         category:"Travel",
    //         title:"Exploring the Beauty of Kashmir",
    //         content:"Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, stunning mountains, and lush green valleys. In this blog, we explore the vibrant culture, delicious cuisine, and the warm hospitality of the Kashmiri people. From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, each corner of Kashmir offers a unique experience. Join us on a journey through picturesque locales such as Gulmarg, Pahalgam, and the stunning gardens of Srinagar, where every moment feels like a dream come true.",
    //         name:"Riyan Haider Kokir",
    //         date:"August 8, 2024",
    //     },
    //     {
    //         id:'5',
    //         image:blog1 ,
    //         category:"Travel",
    //         title:"Exploring the Beauty of Kashmir",
    //         content:"Kashmir, often referred to as 'Paradise on Earth,' is renowned for its breathtaking landscapes, stunning mountains, and lush green valleys. In this blog, we explore the vibrant culture, delicious cuisine, and the warm hospitality of the Kashmiri people. From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, each corner of Kashmir offers a unique experience. Join us on a journey through picturesque locales such as Gulmarg, Pahalgam, and the stunning gardens of Srinagar, where every moment feels like a dream come true.",
    //         name:"Riyan Haider Kokir",
    //         date:"August 8, 2024",
    //     }
    // ]

    // const blog = blogPosts.find(blog => blog.id === id); // Find the blog by ID


    return (
        <Layout>
            <main>
                {blog ? (
                    <>
                        <p className="category">{blog.category}</p>
                        <h3>{blog.title}</h3>
                        <div className="author">
                            <p className="name">{blog.name}</p> {/* You can dynamically render the author here */}
                            <p className='date'>{blog.date}</p> {/* You can dynamically render the date here */}
                        </div>
                        <img src={`http://127.0.0.1:8000${blog.bannerImage}`} alt="" /> {/* You can dynamically render the image here */}
                        <p className="content">{blog.content}</p>
                    </>
                ) : (
                    <p>Blog not found!</p>
                )}
            </main>
        </Layout>
    );
}

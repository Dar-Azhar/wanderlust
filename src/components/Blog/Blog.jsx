import React from 'react'
import './Blog.scss'
import { useNavigate } from 'react-router-dom';
export const Blog = (props) => {
    const navigate = useNavigate()
    const getFirst10Words = (blogcontent) => {
        const words = blogcontent.split(' ');
        return words.slice(0, 10).join(' ') + (words.length > 10 ? ' .....' : '');
      };
    const openBlog =  ()=>{
        navigate(`/blogs/${props.blogId}`)
    }
    return (
        <article className='blogCard' onClick={openBlog}>
            <img src={props.bannerImage} alt="" />
            <div className="text">
                <p className="category">{props.category}</p>
                <h3>{props.title}</h3>
                <p className="content">{getFirst10Words(props.content)}</p>
                <div className="author">
                    <p className="name">{props.name}</p>
                    <p className='date'>{props.date}</p>
                </div>
            </div>
        </article>
    )
}

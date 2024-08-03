import React from 'react'
// import axios  from 'axios'
import './PackageCard.scss'
export const PackageCard = (props) => {
    const handleDetails = async () => {
        try {
            // const response = await axios.get('https://wanderlust.up.railway.app');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
  return (

    <div className="card">
        <img src={props.img} alt="card" />
        <div className="card-body">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button onClick={handleDetails}>Check Details</button>
        </div>
    </div>
  )
}

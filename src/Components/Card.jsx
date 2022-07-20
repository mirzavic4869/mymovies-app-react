import React from 'react';
import Button from './Button';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
      <div className='p-3 flex flex-col justify-between bg-zinc-800 rounded shadow-lg shadow-black'>
        <Link to ={props.navigate}>
        <img src={props.image ? `https://image.tmdb.org/t/p/w500${props.image}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={props.title}
        height="750" />
        <p>{props.title}</p>
        <p>{props.votes}</p>
        </Link>
        <Button 
        label="Add to Favorite"
        onClick={() => props.navigate(`/detail/${props.data.id}`) }/>
      </div>
    )
}

export default Card
import React from 'react';
import "../styles/index.css";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { WithRouter } from '../utils/Navigation';
import { useSelector } from "react-redux"


const MyFavorite = () =>  {
  const favorites = useSelector((state) => state.favorites)
    return (
      <>
      <Header/>
      <div className='card w-full h-screen overflow-auto'>
        <p className='text-4xl my-10'>MY FAVORITE</p>
        <div className='grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-5 gap-5'>
          {favorites.map((movie) => (
          <Card key={movie.id} data={movie}/>
          /* {favorites.map((data) => (
            <Card 
            key={data.id} 
            title={data.title} 
            image={data.poster_path}
            votes={data.vote_average}
            navigate={`/detail/${data.id}`}
            onClick={() => this.props.navigate(`/detail/${data.id}`)} */
    
          ))}
        </div>
      </div>
    </>
    )
}

export default WithRouter(MyFavorite);

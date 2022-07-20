import React, { useState, useEffect } from 'react'
import "../styles/index.css";
import Card from "../Components/Card";
import Header from "../Components/Header";
import axios from "axios";
import { WithRouter } from '../utils/Navigation';
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action"

const HomePage = () => {
// Constructor
  const dispatch = useDispatch();
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("THE MOVIE LIST");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);
  // state = {
  //     title: "Home Test",
  //     content: "THE MOVIE LIST",
  //     page: 1,
  //     datas: [
  //       // {
  //       //   id: 1,
  //       //   title:"ANTMAN",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/superhero/antman.jpg"
  //       // },
  //       // {
  //       //   id: 2,
  //       //   title:"SUPERMAN",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/superhero/superman.jpg"
  //       // },
  //       // {
  //       //   id: 3,
  //       //   title:"BATMAN",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/superhero/batman.jpg"
  //       // },
  //       // {
  //       //   id: 4,
  //       //   title:"AVENGER",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/superhero/avenger.jpg"
  //       // },
  //       // {
  //       //   id: 5,
  //       //   title:"SPIDERMAN",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/superhero/spiderman-cover.jpg"
  //       // },
  //       // {
  //       //   id: 6,
  //       //   title:"MORBIUS",
  //       //   image: 
  //       //   "https://raw.githubusercontent.com/deaaprizal/rdeafilms-react-js-basic/part1/basic/src/assets/images/trending/morbius.jpg"
  //       // },
  //       // {
  //       //   id: 7,
  //       //   title:"SKULL",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-774bfbd428630d7aba41ee2d97610546_screen.jpg?ts=1637034842"
  //       // },
  //       // {
  //       //   id: 8,
  //       //   title:"THE WOLF",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/forest-wolf-man-book-cover-design-template-4253ca1e934fc3570258f53cc0d3640f_screen.jpg?ts=1640772536"
  //       // },
  //       // {
  //       //   id: 9,
  //       //   title:"WEREWOLF",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-poster-template-design-5edef9eec16cb029100be1f7b05f5217_screen.jpg?ts=1637019747"
  //       // },
  //       // {
  //       //   id: 10,
  //       //   title:"FREEDOM",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054"
  //       // },
  //       // {
  //       //   id: 11,
  //       //   title:"THE RIOTS",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-da22da077c0f680f573a78d2f5082abc_screen.jpg?ts=1637019781"
  //       // },
  //       // {
  //       //   id: 12,
  //       //   title:"GANGS",
  //       //   image: 
  //       //   "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-f57bb4f77954690b2ffdb30199c1377b_screen.jpg?ts=1637012475"
  //       // },
        
  //     ],
  //     information: {},
  //     loading: false,
  // };

// Side Effect
useEffect(() => {
  fetchData();
}, []);

// komunikasi API menggunakan Axios
const fetchData = (page) => {
    setLoading(true);
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
  .then((response) => {
   const {results} = response.data;
   if (results) {
    setMovies(results);
    }
  })
  .catch((error) => {
   alert(error.toString());
  })
  .finally(() => setLoading(false))
 }

//   async fetcData() {
//     // setTimeout(() => {
//     // }, 2000);
//     this.setState({
//       title: "Home Test",
//     },
//     () => {
//     console.log(this.state.title);
//   });
// }
  
const handleScroll = (e) => {
  let element = e.target;
  const bottom = 
    element.scrollHeight - element.scrollTop === element.clientHeight;
  if (bottom) {
    this.fetchData(page + 1)
  }
};

const handleFav = (data) => {
  const getMovies = localStorage.getItem("favMovies");
  if (getMovies) {
    const parsedMovies = JSON.parse(getMovies);
    parsedMovies.push(data)
    localStorage.setItem("FavMovies", JSON.stringify(parsedMovies));
    dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
  } else {
    localStorage.setItem("favMovies", JSON.stringify([data]));
    dispatch(reduxAction("ADD_FAVORITE", [data]));
  }
  alert("Movie added to favorites");
};

    return (
      <>
        <Header/>
        <div className='card w-full h-screen overflow-auto' onScroll={handleScroll}>
          <p className='text-4xl my-10'>{content}</p>
          <div className='grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-5 gap-5'>
            {movies.map((data) => (
              <Card 
              key={data.id} 
              title={data.title} 
              image={data.poster_path}
              votes={data.vote_average}
              navigate={`/detail/${data.id}`}
              onClick={() => handleFav(data)}
              // onClick={() => this.props.navigate(`/detail/${data.id}`)} 
              />
            ))}
          </div>
        </div>
      </>
    );
}

export default WithRouter(HomePage);
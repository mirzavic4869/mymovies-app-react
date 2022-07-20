import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';
import HomePage from '../pages/HomePage';
import DetailMovie from '../pages/DetailMovie';
import MyFavorite from '../pages/MyFavorite';
import TestPage from '../pages/TestPage';
import { ThemeContext } from '../utils/context';
import { reduxAction } from '../utils/redux/actions/action';


const App = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("light")
  const background = useMemo (() => ({theme, setTheme}), [theme])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies")
    if (getMovies) {
      dispatch(reduxAction("ADD_FAVORITE", JSON.parse(getMovies)))
    }
  }, [])
    return (
      <ThemeContext.Provider value={background}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="detail/:movie_id" element={<DetailMovie/>} />
                <Route path="favorites" element={<MyFavorite/>} />
                <Route path="test" element={<TestPage/>} />
                <Route path="*" element={<div>404 Error not Found</div>}/>
            </Routes> 
         </BrowserRouter>
      </ThemeContext.Provider>
    );
}

export default App
import React from 'react';
import { CardTitle } from 'reactstrap';
import MovieGrabber from './movieGrabber/movieGrabber';
import { useState, useEffect } from 'react';
import axios from "axios";

import './movies.css';

const Movies = () => {

    const [data, setData] = useState([]);

    const BASE_URL = "https://api.themoviedb.org/3";
    const api = axios.create({ baseURL: BASE_URL });

    const api_key = "3fd2be6f0c70a2a598f084ddfb75487c";

    const getUpcoming = api.get("movie/upcoming", {
        params: { api_key }
    });

    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;


    useEffect(() => {
        getUpcoming.then(response => {
            setData(response.data.results);
        })
    }, [])

    return (
        <section className="app-container">
            <div className="app-texts">
                <CardTitle className="app-title">Upcoming Movies</CardTitle>
            </div>
            <div className="app-list">
                {data.map((item,i) => (
                    <MovieGrabber key={i} title={item.title} img={getImage(item.poster_path)} overview={item.overview} rating={item.vote_average}/>
                ))}
            </div>
        </section>
    );
}

export default Movies;

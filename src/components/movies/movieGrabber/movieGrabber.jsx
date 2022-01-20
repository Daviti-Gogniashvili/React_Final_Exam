import React from 'react';
import './movieGrabber.css';

const Movies = ({ title, img, rating, overview }) => {
    return (
        <div className="mg">
            <div className="mg-title-container">
                <h3 className="mg-title">{title}</h3>
            </div>
            <img src={img} alt="" className="mg-image" />
            <div className="mg-text-container">
                <p className="mg-overview">{overview}</p>
                <p className="mg-rating">Rating: {rating}</p>
            </div>
        </div>
    );
}

export default Movies;

import React from 'react'
import { CardTitle } from 'reactstrap';

const PokemonThumb = ({ id, image, name, type }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <CardTitle>{name}</CardTitle>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumb
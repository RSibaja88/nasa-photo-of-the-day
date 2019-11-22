import React from 'react';


const APODCard = props => {
    return (
    <div>
            <img className="propsPic" alt='Astronomy Picture of the Day' src={props.hdurl}/>
            <h1>Title: {props.title}</h1>
            <h5>Photography Credit: {props.copyright}</h5>
            <h6>Date: {props.date}</h6>
            <p>Description: {props.explanation}</p>
            </div>
        
    );
};

export default APODCard

import React from "react";
import'./Card.css'

const Card = (props) =>{
    return(
        <div className = "Card">
            <img className="truck" src={props.img} alt={props.alt}/>
            <h2>{props.name}</h2>
            <h3>{props.cuisine}</h3>
            <a href={props.href}><button>View Website</button></a>
        </div>
    );

}

export default Card;
import React from "react";

const Card = (props) =>{
    return(
        <div className = "Card">
            <img src="" alt=""/>
            <h2>{props.event}</h2>
            <h3>{props.foodType}</h3> 
        </div>
    );

}

export default Card;
import React, { useEffect, useState } from "react";
import TruckCard from "../truck-card/TruckCard";
import "./TruckListStyles.css";

const TruckList = (props) => {
    return(
        <div className = "truck-list-container"> 
            <ul className = "truck-list">
                { 
                    props.trucks.map((truck, index) => 
                        <TruckCard id ={index} truck={truck}></TruckCard>
                    )
                }
            </ul>
        </div>
    );
}

export default TruckList;
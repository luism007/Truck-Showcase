import React, { useEffect, useState } from "react";
import TruckCard from "../truck-card/TruckCard";
import "./TruckListStyles.css";

const TruckList = (props) => {
    const [trucks, setTrucks] = useState([]);
    
    return(
        <div className = "truck-list-container"> 
            <ul className = "truck-list">
                { 
                    props.trucks.map((truck, index) => 
                        <TruckCard key ={truck._id} truck={truck}></TruckCard>
                    )
                }
            </ul>
        </div>
    );
}

export default TruckList;
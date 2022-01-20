import React, { useEffect, useState } from "react";
import CrossComponentCommunicationService from "../../services/CrossComponentCommunicationService";
import "./TruckCardStyles.css";

const TruckCard = (props) => {

    const sendTruck = (truck) => {
        CrossComponentCommunicationService.updateTruckSubject(truck);
    };

    return(
        <div className= "cardContainer" onClick={() => { sendTruck(props.truck); }}>
            <li key={props.id}> {props.truck.truckName} </li>
        </div>
    );
}

export default TruckCard;

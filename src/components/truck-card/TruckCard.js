import React, { useEffect, useState } from "react";
import CrossComponentCommunicationService from "../../services/CrossComponentCommunicationService";
import "./TruckCardStyles.css";

const TruckCard = (props) => {

    const imagesUrl = '../../../assets/images/';
    
    const sendTruck = (truck) => {
        CrossComponentCommunicationService.updateTruckSubject(truck);
    };

    const doesTruckHaveProperties = (truck) => {
        let val = false;

        if(!truck) { 
            val = false;
        } else if (Object.keys(truck).length !== 0) { 
            val = true;
        }

        return val;
    }

    const getImage = (truck) => {

        if(!truck) {
            return;
        }

        const name = truck.name;

        switch(name) { 
            case 'Tacoma':
                return imagesUrl + '2022-toyota-tacoma-trd-pro.jpeg';
            case 'Colorado': 
                return imagesUrl + 'chevrolet-colorado-zr2.jpeg';
            case 'Ranger':
                return imagesUrl + 'ford-ranger-tremor.jpeg';
            case 'Frontier':
                return imagesUrl + 'nissan-frontier-pro4x.jpeg';
            case 'Gladiator':
                return imagesUrl + 'jeep-gladiator.jpeg';
            default:
                return imagesUrl + '2022-toyota-tacoma-trd-pro.jpeg';
        }

    }


    return(
        <div className= "cardContainer" onClick={() => { sendTruck(props.truck); }}>
            <li> {props.truck.name} </li>
            <img alt = {props.truck.name} src={getImage(props.truck)} className="truckCardImg"></img>
        </div>
    );
}

export default TruckCard;

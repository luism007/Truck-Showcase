import React, { useEffect, useState } from "react";
import TruckCard from "../truck-card/TruckCard";
import "./TruckListStyles.css";
import { connect } from "react-redux";

const TruckList = (props) => {

    const trucksInProps = (trucks) => {
        let val = false;
        if(!trucks) { 
            val = false;
        } else if (trucks.length > 0) { 
            val =  true;
        } else { 
            val = false;
        }
        return val;
    }

    const doesTruckHaveProperties = (truck) => {
        let val = false;

        if(!truck) { 
            val = false;
        } else if (Object.keys(truck).length !== 0) { 
            val = true;
        }
        return val;
    }

    return (
      <div className="truck-list-container">
        <ul className="truck-list">
          {trucksInProps(props.trucks) &&
            props.trucks.map((truck, index) => (
             doesTruckHaveProperties(truck) && <TruckCard key={index} truck={truck}></TruckCard>
            ))}
        </ul>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        trucks: state.trucks
    }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps)(TruckList);
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
        console.log('Evaluated val: ', val);
        return val;
    }

    return (
      <div className="truck-list-container">
        <ul className="truck-list">
          {trucksInProps(props.trucks) &&
            props.trucks.map((truck, index) => (
              <TruckCard key={index} truck={truck}></TruckCard>
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
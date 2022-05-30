import { useState } from "react";
import "./TruckInputField.css";

const TruckInputField = (props) => {

    const [focused, setFocused] = useState(false);
    
    const handleFocus = (e) => {
      setFocused(true);
    } 

    return (
      <div className="inputContainer">
        <label className = "inputLabel">{ props.label }</label>
        <input className = "inputField" 
        type={props.type} 
        required = {props.required} 
        name = { props.name} 
        value = { props.value} 
        onChange = { props.onChange }
        onBlur = { handleFocus }
        focused = { focused.toString() }
        ></input>
        <span className = "errorMessage">{props.error}</span>
      </div>
    );
}

export default TruckInputField;
import "./TruckInputField.css";

const TruckInputField = (props) => {
    
    return (
      <div className="inputContainer">
        <label className = "inputLabel">{ props.label }</label>
        <input className = "inputField" type={props.type} required = {props.required} name = {props.name} value = {props.value} onChange={ props.onChange }></input>
        <span className = "errorMessage">{props.error}</span>
      </div>
    );
}

export default TruckInputField;
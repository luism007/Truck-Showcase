import "./TruckInputField.css";

const TruckInputField = (props) => {
    
    return (
      <div className="inputContainer">
        <label>{ props.label }</label>
        <input type={props.type} required = {props.required} name = {props.name} value = {props.value} onChange={ props.onChange }></input>
        <span>{props.error}</span>
      </div>
    );
}

export default TruckInputField;
import React from "react"


const TruckCreateTruckForm = () => {

    const handleFormChange = (event) => {
        console.log('Form: ', event.target.value);
     }

     const handleSubmit = (event) => {
         event.preventDefault();
        console.log(event);
     }

    return(
        <div>
            <h1> Create Truck </h1>
            <form onSubmit={ handleSubmit }>
                <input type = "text" onChange={ handleFormChange }></input>
                <input type = "submit" value = "Submit"></input> 
            </form>
        </div>
    );
}

export default TruckCreateTruckForm;
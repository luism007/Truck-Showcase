import React from "react";
import TruckCreateTruckForm from '../truck-create-truck-form/TruckCreateTruckForm';
import { useState } from 'react';

const AdminDashboard = (props) => {
    
  const [displayCreateTruckForm, setDisplayCreateTruckForm] = useState(false);

  const toggleCreateTruckForm = () => {
    setDisplayCreateTruckForm(
      (displayCreateTruckForm) => !displayCreateTruckForm
    );
  };

  const handleCloseForm = (event) => {
    const form = document.getElementById("form");
    form.classList.remove("open");
    form.classList.add("close");
    if (displayCreateTruckForm) {
      toggleCreateTruckForm();
    }
  };
  return (
    <div>
      <h1> Hello Admin! </h1>
      <button onClick={toggleCreateTruckForm}> Create Truck </button>
      <TruckCreateTruckForm display = { displayCreateTruckForm } close = { handleCloseForm }/>
    </div>
  );
};

export default AdminDashboard;

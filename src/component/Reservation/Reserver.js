import React from "react";
import "./reserverstyle.css";
import { useLocation } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

const Reserver = ( {user} ) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');

  return (
    <div className="reservation">
        <h1>Bateaux Pirates Djerba</h1>
        <div className="reservation-content">
          <MultiStepForm date={date} user={user}/>  
        </div>
    </div>
  );
};
export default Reserver;

import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import "./successstyle.css";
import { Link } from "react-router-dom";

const Success = () => {
  const { numbers, date, user } = useContext(MultiStepFormContext);
  return (
    <>
    <h2>Réservation enregistrée!</h2>
    <div className="success-icon">
    <i className="fa-solid fa-circle-check" style={{color: "#0370C5"}}></i>
    </div>
    
      <Link to="/home">
        <div className="success-btn">
          OK
        </div>
      </Link>
    </>
  );
};
export default Success;

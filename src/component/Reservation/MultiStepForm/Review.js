import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import "./successstyle.css";

const Review = () => {
  const { numbers, next, prev, date, user } = useContext(MultiStepFormContext);
  return (
    <>
      <div className="list-container">
        <div className="list-item">
          <span className="list-label">Réservation pour:</span>
          <span className="list-value">{date}</span>
        </div>
        <div className="list-item">
          <span className="list-label">Nombres de places:</span>
          <span className="list-value">{numbers}</span>
        </div>
        <div className="list-item">
          <span className="list-label">Réserver par:</span>
          <span className="list-value">{user.displayName}</span>
        </div>
      </div>
      <div className="reservation-buttons">
        <div className="show" onClick={prev}>
          Retourner
        </div>
        <div className="show" onClick={next}>
          Confirmer
        </div> 
      </div> 
    </>
    
  );
};
export default Review;

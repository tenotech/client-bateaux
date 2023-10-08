import React from "react";
import "./verifierstyle.css";
import { Link, useLocation } from "react-router-dom";
import DataTable from "./DataTable";

const Verifier = ( {user} ) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');

  const bateauxData = [
    { id: 1, name: "Bateaux 1", max: 30, reserved: 12 },
    { id: 2, name: "Bateaux 2", max: 35, reserved: 10 },
    { id: 3, name: "Bateaux 3", max: 40, reserved: 40 },
    { id: 4, name: "Bateaux 4", max: 25, reserved: 13 },
    { id: 5, name: "Bateaux 5", max: 25, reserved: 20 },
    { id: 6, name: "Bateaux 6", max: 30, reserved: 12 },
    { id: 7, name: "Bateaux 7", max: 35, reserved: 10 },
    { id: 8, name: "Bateaux 8", max: 40, reserved: 40 },
    { id: 9, name: "Bateaux 9", max: 25, reserved: 13 },
    { id: 10, name: "Bateaux 10", max: 25, reserved: 20 },
    { id: 11, name: "Bateaux 11", max: 30, reserved: 12 },
    { id: 12, name: "Bateaux 12", max: 35, reserved: 10 },
    { id: 13, name: "Bateaux 13", max: 40, reserved: 40 },
    { id: 14, name: "Bateaux 14", max: 25, reserved: 13 },
    { id: 15, name: "Bateaux 15", max: 25, reserved: 20 },
    { id: 16, name: "Bateaux 16", max: 25, reserved: 13 },
    { id: 17, name: "Bateaux 17", max: 25, reserved: 20 }
  ];

  return (
    <div className="reservation">
        <h1>Bateaux Pirates Djerba</h1>
        <p>Réservation pour le <span className="span-date">{date}</span></p>
        <div className="Verification-content">
          <DataTable data={bateauxData} />  
        </div>
        <Link to="/home">
            <div className="return-btn">
                Retourner
            </div>
      </Link>
    </div>
  );
};
export default Verifier;

import React, { useState } from "react";
import "./mainstyle.css";
import DateComponent from "./Date";
import { StyledEngineProvider } from "@mui/material";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

const Main = ( {user} ) => {

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const navigate = useNavigate();

  const handleSelectDate = (value) => {
    setSelectedDate(value);
  };

  const handleReserver = () => {
    navigate(`/reserver?date=${selectedDate.format('DD-MM-YYYY')}`);
  };
  const handleVerifier = () => {
    navigate(`/verifier?date=${selectedDate.format('DD-MM-YYYY')}`);
  };

  return (
    <div className="main">
        <h1>Bateaux Pirates Djerba</h1>
        <div className="main-contenant">
          { user ? (
          <p>Bienvenue <span className="user-p">{user.displayName}</span> 🙂</p>
          ):(
            <p>Bienvenue! </p>
          )}
          <p>Réservez ou vérifiez la disponibilité des bateaux simplement en quelques clics.</p>
          <div>
          <StyledEngineProvider injectFirst>
            <DateComponent onSelectDate={handleSelectDate}></DateComponent>
          </StyledEngineProvider>
          </div>
          <div className="main-buttons">
            <button className="show" onClick={handleVerifier}>
              Vérifier
            </button>
            <button className="show" onClick={handleReserver}>
              Réserver
            </button>
          </div>    
      </div>
    </div>
  );
};
export default Main;

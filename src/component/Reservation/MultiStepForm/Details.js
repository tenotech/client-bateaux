import React, { useContext } from "react";
import { Formik } from "formik";
import MultiStepFormContext from "./MultiStepFormContext";
import QuantityInput from "../NumberInput";
import { Link } from "react-router-dom";
const Details = () => {
  const { numbers, setNumbers, next, date } = useContext(MultiStepFormContext);

  const handleSelectChange = (value) => {
    setNumbers(value)
  };

  return (
    <Formik
      initialValues={numbers}
      onSubmit={() => {
        next();
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <>
            <p>Réservation pour le <span className="span-date">{date}</span></p>
            <p>Choisissez le nombre de places:</p>
            <QuantityInput onSelectChange={handleSelectChange}></QuantityInput>
            <div className="reservation-buttons">
                <Link to="/home">
                  <div className="show">
                    Retourner
                  </div>
                </Link>
                <div className="show" onClick={handleSubmit}>
                  Suivant
                </div>
            </div>    
          </>
        );
      }}
    </Formik>
  );
};
export default Details;

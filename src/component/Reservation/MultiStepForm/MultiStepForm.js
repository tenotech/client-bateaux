import React, { useState } from "react";
import { Provider } from "./MultiStepFormContext";
import Details from "./Details";
import Review from "./Review";
import Success from "./Success";

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Review />;
    case 2:
      return <Success />;
    default:
      return null;
  }
};

const MultiStepForm = ({ date, user }) => {
  const [numbers, setNumbers] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider value={{ numbers, setNumbers, next, prev, date, user }}>
      {renderStep(currentStep)}
    </Provider>
  );
};
export default MultiStepForm;

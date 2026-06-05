import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //step -1 add a new state variable
  // step-2 use it in the code
  // step-3 then update the peice of code in event handler

  const [step, setStep] = useState(1); // default value of use state is given 1  inside paranthesis
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({name:"Shehbaz"})

  function handlePrevious() {
    if (step > 1) setStep((currStep)=> currStep -1);
  }

  function handleNext() {
    if (step < 3) setStep((currStep)=> currStep + 1 );
    // setTest({name:"Shehbaz"})
  }

  function closeButton(){
    setIsOpen((open)=> !open );
  }

  return (
    <>
      <button className="close" onClick={closeButton}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}:{messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </ >
  );
}

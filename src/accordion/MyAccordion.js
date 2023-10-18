import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_heading">
        <p onClick={() => setShow(!show)}>
          {show ? (
            <i className="fa-solid fa-minus fa-lg"></i>
          ) : (
            <i className="fa-solid fa-plus fa-lg"></i>
          )}
        </p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
};

export default MyAccordion;

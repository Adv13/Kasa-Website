import React from "react";
import { useState } from "react";
import arrow from "../../assets/arrow.png";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <img className="arrow-down" alt="arrow" src={arrow}></img>
          ) : (
            <img alt="arrow" src={arrow} />
          )}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;
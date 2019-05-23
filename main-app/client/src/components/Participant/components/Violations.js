import React from "react";
import "./Violations.scss";
import { violationCodes } from "./violationsData.js";

const Violations = ({ violations }) => {
  console.log(violationCodes.indexOf("VN 1234"));
  return (
    <div className="violation-container">
      <p>Violations</p>
      {violations.map(violation => (
        <div key={violation}>
          <span
            className={
              violationCodes.indexOf(String(violation)) >= 0
                ? null
                : "violation-uncommon"
            }
          >
            {violation}
            <span> X </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Violations;

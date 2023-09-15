import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div style={{ background: "#5D55FF" }}>
      <div className="wrapper">
        <div id="experience">
          <div className="headline">
            <div className="title">Guideline</div>
            <div className="quotesList">
              <div className="quote">
                Banks provide a range of financial services, including savings
                accounts, loans, and investment opportunities,
              </div>
              <div className="quote">
                to help individuals and businesses manage their money, grow
                their wealth, and achieve their financial goals.
              </div>
            </div>
          </div>
          <div className="experienceContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

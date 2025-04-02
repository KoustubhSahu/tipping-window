import React, { useState } from "react";
import "./TipOptions.css"; // Importing CSS for styling

const TipOptions = ({ totalAmount, tip, setTip }) => {
  const [customTipView, setCustomTipView] = useState(false);
  const [tipSwithch, setTipSwitch] = useState("Apply Custom Tip");
  const [selectedTip, setSelectedTip] = useState("");

  const switchTipView = () => {
    setCustomTipView(!customTipView);
    setTipSwitch(customTipView ? "Apply Custom Tip" : "Back");
  };
  const handleTipChange = (tipVal, selectedTipType) => {
    const value = parseFloat(tipVal);
    setSelectedTip(value);
    setTip(value);
    setSelectedTip(selectedTipType);
  }

  return (
    <div className="tip-options">
      {customTipView ? (
        <div className="custom-tip-view">
          <div className="input-wrapper">
            <span>$</span>
            <input
              type="number"
              onChange={(e) => handleTipChange(e.target.value, "custom")}
              required
              min="0"
              placeholder={totalAmount*0.25}
              value={tip}
            />
          </div>
        </div>
      ) : (
        <div className="predefined-tip">
          <button
            className={`tip-button ${selectedTip === "5%" ? "selected-tip" : ""}`}
            onClick={() => handleTipChange(totalAmount * 0.05, "5%")}
          >
            5% <span className="tip-amount">${totalAmount * 0.05}</span>
          </button>
          <button
            className={`tip-button ${selectedTip === "10%" ? "selected-tip" : ""}`}
            onClick={() => handleTipChange(totalAmount * 0.1, "10%")}
          >
            10% <span className="tip-amount">${totalAmount * 0.1}</span>
          </button>
          <button
            className={`tip-button ${selectedTip === "15%" ? "selected-tip" : ""}`}
            onClick={() => handleTipChange(totalAmount * 0.15, "15%")}
          >
            15% <span className="tip-amount">${totalAmount * 0.15}</span>
          </button>
        </div>
      )}

      <button className="tip-button" onClick={() => switchTipView()}>
        {tipSwithch}
      </button>
      <button className="pay-button">Pay</button> 
    </div>
  );
};

export default TipOptions;

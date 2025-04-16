import React, { useState, useEffect } from "react";
import TipWindow from "./components/TipWindow";
import PayWindow from "./components/PayWindow";
import SecretButton from "./components/SecretButton";
import "./App.css";

const App = () => {
  const [billAmount, setBillAmount] = useState(50);
  const [tip, setTip] = useState("");
  const [currencyIdx, setCurrencyIdx] = useState(0);
  const [currWindow, setCurrWindow] = useState("TipWindow");
  const [rotated, setRotated] = useState(false);

  // Rotate by default on mobile
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setRotated(true);
    }
  }, []);

  const currencyArray = ["$", "₹"];

  return (
    <div className={`App ${rotated ? "rotated" : ""}`}>
      <SecretButton setRotated={setRotated} />
      {currWindow === "TipWindow" ? (
        <TipWindow
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          tip={tip}
          setTip={setTip}
          currencyIdx={currencyIdx}
          setCurrencyIdx={setCurrencyIdx}
          currencyArray={currencyArray}
          setCurrWindow={setCurrWindow}
          rotated={rotated}
        />
      ) : (
        <PayWindow
          billAmount={billAmount}
          tip={tip}
          currencySymbol={currencyArray[currencyIdx]}
          setCurrWindow={setCurrWindow}
          rotated={rotated}
        />
      )}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import TipOptions from "./components/TipOptions";
// Importing CSS for styling
import "./App.css";


const App = () => {
  const [totalAmount, setTotalAmount] = useState(50.00);
  const [tip, setTip] = useState("");
  return (
    <div className="App">
      <div className="container">
        <h1>Bill Amount: <span id="amountBeforeTip">${totalAmount}</span></h1>
        <p>Would you like to tip?</p>
          <TipOptions totalAmount={totalAmount} tip={tip} setTip={setTip}/>
        <p>Your total amount after tip: <span id="totalAmount">${totalAmount + (tip==="" ? 0 : tip)}</span></p>
      </div>
    </div>
  );
};

export default App;

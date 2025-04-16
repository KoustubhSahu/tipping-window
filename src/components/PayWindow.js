import React, { useState } from "react";
import "./PayWindow.css";
import {
  FaMobileAlt,
  FaMoneyBillWave,
  FaBitcoin,
  FaHamburger,
  FaArrowLeft
} from "react-icons/fa";

const PayWindow = ({ billAmount, tip, currencySymbol, setCurrWindow }) => {
  const [message, setMessage] = useState("");
  const [showAllOptions, setShowAllOptions] = useState(false);

  const taxRate = 0.05;
  const tax = billAmount * taxRate;
  const total = billAmount + (tip || 0) + tax;

  const handlePaymentClick = (method) => {
    switch (method) {
      case "tap":
        setMessage("🔄 Waiting for tap...");
        setTimeout(() => setMessage("✅ Payment Successful!"), 2000);
        break;
      case "cash":
        setMessage("💸 Please hand over the cash to the cashier 😉");
        break;
      case "crypto":
        setMessage("📤 Send exactly 0.00042 BTC to this wallet: fake_wallet_address");
        break;
      case "feed":
        setMessage("🍔 Transaction accepted. Food incoming!");
        break;
      default:
        setMessage("");
    }
  };

  return (
    <div className="PayWindow">
      <div className="payment-methods">
        {/* Back Button */}
        <button className="back-button" onClick={() => setCurrWindow("TipWindow")}>
          <FaArrowLeft />
        </button>

        <h2>Select Payment Method</h2>
        <div className="payment-grid">
          {/* Always show Tap and Cash */}
          <div className="payment-card" onClick={() => handlePaymentClick("tap")}>
            <FaMobileAlt className="payment-icon" />
            <span>Tap to Pay</span>
          </div>
          <div className="payment-card" onClick={() => handlePaymentClick("cash")}>
            <FaMoneyBillWave className="payment-icon" />
            <span>Pay with Cash</span>
          </div>

          {/* Show more/less depending on view */}
          {showAllOptions && (
            <>
              <div className="payment-card" onClick={() => handlePaymentClick("crypto")}>
                <FaBitcoin className="payment-icon" />
                <span>Pay with Crypto</span>
              </div>
              <div className="payment-card" onClick={() => handlePaymentClick("feed")}>
                <FaHamburger className="payment-icon" />
                <span>Feed Me Instead</span>
              </div>
            </>
          )}
        </div>

        {/* Toggle View Button */}
        <button
          className="toggle-options-button"
          onClick={() => setShowAllOptions(!showAllOptions)}
        >
          {showAllOptions ? "← Fewer options" : "More payment options →"}
        </button>

        {message && <p className="payment-message">{message}</p>}
      </div>

      <div className="bill-summary">
        <h2>Bill Summary</h2>
        <div className="summary-line">
          <span>Bill Amount:</span>
          <span>{currencySymbol}{billAmount.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Tip:</span>
          <span>{currencySymbol}{(tip || 0).toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Tax (5%):</span>
          <span>{currencySymbol}{tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="summary-total">
          <span>Total:</span>
          <span>{currencySymbol}{total.toFixed(2)}</span>
        </div>
        <p className="thank-you">Thank you for your payment! 😊</p>
      </div>
    </div>
  );
};

export default PayWindow;

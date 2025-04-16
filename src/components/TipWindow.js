import React, { useState } from "react";
import TipOptions from "./TipOptions";
// Importing CSS for styling
import "./TipWindow.css";

const TipWindow = ({billAmount, setBillAmount, tip, setTip, currencyIdx, setCurrencyIdx, currencyArray, setCurrWindow}) => {

    const [billAmountEdit, setBillAmountEdit] = useState(50);
    const [billAmountClickTimes, setBillAmountClickTimes] = useState([]);
    const [editBillAmount, setEditBillAmount] = useState(false);

    const handleBillAmountClick = () => {
        const currentTime = new Date().getTime();

        setBillAmountClickTimes((prevClickTimes) => {
            const newClickTimes = [...prevClickTimes, currentTime].slice(-3);

            if (newClickTimes.length === 3) {
                if (newClickTimes[2] - newClickTimes[0] <= 1000) {
                    setEditBillAmount(true);
                }
            }
            return newClickTimes;
        });
    };

    return (
        <div className="TipWindow">
            <div className="container">
                <div className="bill-amount-wrapper">
                    <h1 className="bill-amount" onClick={handleBillAmountClick}>
                        Bill Amount:
                        {editBillAmount ? (
                            <div className="bill-amount-edit-wrapper">
                                <button
                                    className="currency-edit"
                                    onClick={() =>
                                        setCurrencyIdx((currencyIdx + 1) % currencyArray.length)
                                    }
                                >
                                    {currencyArray[currencyIdx]}
                                </button>
                                <input
                                    className="bill-amount-edit"
                                    type="number"
                                    required
                                    onChange={(e) =>
                                        setBillAmountEdit(parseFloat(e.target.value))
                                    }
                                    min="0"
                                />
                                <button
                                    className="setBillAmount"
                                    onClick={() => {
                                        setBillAmount(billAmountEdit);
                                        console.log("billAmountEdit: ", billAmountEdit);
                                        console.log("billAmount: ", billAmount);
                                        setEditBillAmount(false);
                                    }}
                                >
                                    set
                                </button>
                            </div>
                        ) : (
                            <span id="amountBeforeTip">
                                {currencyArray[currencyIdx]}
                                {billAmount}
                            </span>
                        )}
                    </h1>
                </div>
                <p>Would you like to tip?</p>
                <TipOptions
                    billAmount={billAmount}
                    tip={tip}
                    setTip={setTip}
                    currencyArray={currencyArray}
                    currencyIdx={currencyIdx}
                    setCurrWindow={setCurrWindow}
                />
                <p>
                    Your total amount after tip:{" "}
                    <span id="totalAmount">${billAmount + (tip === "" ? 0 : tip)}</span>
                </p>
            </div>
        </div>
    );
};

export default TipWindow;

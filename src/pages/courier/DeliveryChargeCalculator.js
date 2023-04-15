import React, { useState } from "react";
import "./DeliveryChargeCalculator.css";


function DeliveryChargeCalculator() {
  const [distance, setDistance] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState("");

  const calculateDeliveryCharge = () => {
    const baseDeliveryCharge = 80;
    const ratePerKilometer =10;
    const distanceInKilometers = parseFloat(distance);
    const calculatedDeliveryCharge = baseDeliveryCharge + (distanceInKilometers * ratePerKilometer);
    setDeliveryCharge(calculatedDeliveryCharge.toFixed(2));
  }

  return (
    <div>
      <div className="calculator">
      <h4>Delivery Charge Calculator</h4>
      <label className="distance">
        Distance (in kilometers):
        <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </label>
      <button onClick={calculateDeliveryCharge}>Calculate Delivery Charge</button>
      <div className="result">
      {deliveryCharge && (
        <p>Delivery Charge: Rs{deliveryCharge}</p>
      )}
      </div>
    </div>
    </div>
  );
}


export default DeliveryChargeCalculator;

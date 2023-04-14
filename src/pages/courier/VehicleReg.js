import React from "react";
import "./VehicleReg.css";

function CourierRegistration() {
  return (
    <div className="vehiReg">
      <div className="Reg">
        <div className="title">Register your vehicle today</div>
        <form>
          <div className="gender__details">
            <input type="radio" name="vehicle" id="dot-1" />
            <input type="radio" name="vehicle" id="dot-2" />

            <span className="gender__title">Vehicle Type</span>
            <div className="category">
              <label>
                <span className="dot one"></span>
                <span>Van</span>
              </label>
              <label>
                <span className="dot two"></span>
                <span>Mini Lorry</span>
              </label>
            </div>
            <div className="user__details">
              <div className="input__box">
                <span className="details">Vehicle Brand</span>
                <input type="text" placeholder="E.g: Toyota" />
              </div>
              <div className="input__box">
                <span className="details">Vehicle Model</span>
                <input type="text" placeholder="Toyota TR" />
              </div>
              <div className="input__box">
                <span className="details">Vehicle No</span>
                <input type="text" placeholder="******" />
              </div>
            </div>
          </div>

          <div className="buttonsub">
            <input type="submit" value="Submit" data-inline="true" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourierRegistration;

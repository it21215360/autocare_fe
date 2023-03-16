

import React  from "react";
import "./DeliveryRequestForm.css";


function DeliveryRequestForm () {

    return(
<div className="ship">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr/>

  <div className="form">
    
  <div className="fields fields--2">
  
    
    <label className="field">
      <span className="field__label" for="firstname">First name</span>
      <input className="field__input" type="text" id="firstname"  />
    </label>
    <label className="field">
      <span className="field__label" for="lastname">Last name</span>
      <input className="field__input" type="text" id="lastname"  />
    </label>
  </div>

  <label className="field">
    <span className="field__label" for="address">Phone</span>
    <input className="field__input" type="text" id="phone" />
  </label>

  <label className="field">
    <span className="field__label" for="address">Address</span>
    <input className="field__input" type="text" id="address" />
  </label>
  
  <div className="fields fields--3">
    <label className="field">
      <span className="field__label" for="zipcode">Zip code</span>
      <input className="field__input" type="text" id="zipcode" />
    </label>
    <label className="field">
      <span className="field__label" for="city">City</span>
      <input className="field__input" type="text" id="city" />
    </label>
    
  </div>
  </div>
 
  <button className="button">Continue</button>
</div>

    )
    }
    export default DeliveryRequestForm
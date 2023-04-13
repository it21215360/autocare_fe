import React, { useState } from 'react';
import "./CourierLogin.css";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";


const CourierLogin= () => {

  const [CourierData, setCourierData] = useState('');

  const onSaveBtnClick = (e) => {
    try {
      console.log(CourierData);
      axios
        .post(`${API_BASE_URL}/api/courier/add-courier`, {
          CourierData: JSON.stringify(CourierData),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
  
  <div className="logf">
<form formData={CourierData} className="login"  >
  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <input type="user" placeholder="Username"/>
  <input type="city" placeholder="City" id="city"/>
  <input type="submit" onClick = {onSaveBtnClick} value="Log In" />
  <div class="links">

    <a href="#">Forgot password</a>
    <a href="#">Register</a>

  </div>
</form>
</div>
  )
}

export default CourierLogin;

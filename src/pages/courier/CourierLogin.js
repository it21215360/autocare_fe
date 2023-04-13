import React, { useState } from 'react';
import "./CourierLogin.css";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";


const CourierLogin= () => {

  const [CourierDetails, setCourierDetails] = useState({});

  const onSaveBtnClick = (e) => {
    try {
      console.log(CourierDetails);
      axios
        .post(`${API_BASE_URL}/api/courier/add-courier`, {
          CourierData: JSON.stringify(CourierDetails),
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
<form formData={CourierDetails} className="login"  >
  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <input type="user" placeholder="Username"/>
  <input type="city" placeholder="City"/>
  
  <Button type="success"  onClick={onSaveBtnClick}>Login</Button>

  
</form>
</div>
  )
}

export default CourierLogin;
